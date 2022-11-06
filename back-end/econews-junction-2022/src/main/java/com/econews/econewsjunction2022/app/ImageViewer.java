package com.econews.econewsjunction2022.app;
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

import javafx.application.Application;
import javafx.application.Platform;
import javafx.embed.swing.SwingFXUtils;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.canvas.Canvas;
import javafx.scene.control.Button;
import javafx.scene.effect.Light.Point;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.image.PixelFormat;
import javafx.scene.image.PixelWriter;
import javafx.scene.image.WritableImage;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Pane;
import javafx.scene.layout.VBox;
import javafx.scene.shape.Rectangle;
import javafx.stage.FileChooser;
import javafx.stage.Modality;
import javafx.stage.Stage;

public class ImageViewer extends Application {

    private static int m_Width = 600;
    private static int m_Height = 400;
    
    private String HOME_IMAGE = "https://cdn.mos.cms.futurecdn.net/tDukyw55eCqaYtbrdEKdhm-970-80.jpg.webp";
    private ImageView m_Imageview = new ImageView(generateImage());
    private ImageView m_HistogramView = new ImageView(m_Imageview.getImage());
    private Canvas m_OverlayCanvas = null;
    private Stage m_HistogramWindow = null;

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage stage) throws Exception {
        createGUI(stage);
    }

    private BufferedImage getViewImage() {
        if (m_Imageview != null) {
            return SwingFXUtils.fromFXImage(m_Imageview.getImage(), null);
        }
        return null;
    }

    private void setViewImage(BufferedImage bimage) {
        if(bimage == null) {
            return;
        }
        WritableImage wimage = SwingFXUtils.toFXImage(bimage, null);
        m_Imageview.setImage(wimage);
    }

    private void showHistogramImage(BufferedImage bimage) {

        if (m_HistogramWindow == null) {
            m_HistogramWindow = new Stage();
            m_HistogramWindow.setTitle("Histogram");
            m_HistogramWindow.initModality(Modality.NONE);
            VBox dialogVbox = new VBox(20);
            dialogVbox.getChildren().add(m_HistogramView);
            Scene dialogScene = new Scene(dialogVbox, 512, 512);
            m_HistogramWindow.setScene(dialogScene);
        }
        m_HistogramWindow.show();

        if (bimage == null) {
            return;
        }
        WritableImage wimage = SwingFXUtils.toFXImage(bimage, null);
        m_HistogramView.setImage(wimage);
    }

    void createGUI(Stage stage) throws FileNotFoundException {
        stage.setTitle("Image Viewer");
        VBox vbox = new VBox();

        Pane imageViewPane = new Pane();

        imageViewPane.getChildren().add(m_Imageview);

        m_OverlayCanvas = new Canvas(m_Width, m_Height);
        imageViewPane.getChildren().add(m_OverlayCanvas);

        // TODO: Implement rectangle selection tool that selects the area from the image 
        // for the histogram computation. (Assignment 3.)
        // Hints:
        // Set mouse events for imageViewPane.
        // Draw rectangle in m_OverlayCanvas.
        // Commands for drawing in GraphicsContext class (Canvas.getGraphicsContext2D)
        
        Point anchor = new Point();
        Rectangle selection = new Rectangle();       
        
        // Mouse events 
        imageViewPane.setOnMousePressed(event -> {
        	anchor.setX(event.getX());
            anchor.setY(event.getY());
            selection.setX(event.getX());
            selection.setY(event.getY());            
            selection.setFill(javafx.scene.paint.Color.TRANSPARENT);
            selection.setStroke(javafx.scene.paint.Color.YELLOW);
            selection.setStrokeWidth(1);
            
            imageViewPane.getChildren().add(selection);
        });
        
        imageViewPane.setOnMouseDragged(event -> {
            selection.setWidth(Math.abs(event.getX() - anchor.getX()));
            selection.setHeight(Math.abs(event.getY() - anchor.getY()));
            selection.setX(Math.min(anchor.getX(), event.getX()));
            selection.setY(Math.min(anchor.getY(), event.getY()));
        });
         
        imageViewPane.setOnMouseReleased(event -> {
            imageViewPane.getChildren().remove(selection);
            selection.setWidth(0);
            selection.setHeight(0); 
            try {
				updateHistogram(selection);
			} catch (IOException e1) {
				e1.printStackTrace();
			}
        });
        
        Button closeButton = new Button("Close");
        closeButton.setOnAction(e -> Platform.exit());

        Button openButton = new Button("Open image");
        openButton.setOnAction(e -> {
			try {
				this.openImage(stage);
			} catch (FileNotFoundException e1) {
				e1.printStackTrace();
			}
		});

        Button histogramButton = new Button("Show histogram");
        histogramButton.setOnAction(e -> {
			try {
				this.updateHistogram(selection);
			} catch (IOException e1) {
				e1.printStackTrace();
			}
		});
        
        HBox buttons = new HBox(closeButton, openButton, histogramButton);
        buttons.setSpacing(10);
        buttons.setPadding(new Insets(5));
        vbox.getChildren().addAll(imageViewPane, buttons);
        Scene scene = new Scene(vbox);
        stage.setScene(scene);
        stage.show();
    }

    /**
     * Compute color histogram and plot the histogram in the histogram view.
     * 
     * @param selection Selected region of the image where the
     * @throws IOException 
     */
    private void updateHistogram(Rectangle selection) throws IOException {
    	// TODO: Compute color histogram and plot the result in histogram image. (Assignment 2.)
        // Histogram plot image is 256 x 256 pixels. Scale y-axis with the highest histogram bin value.
        // Hint: Look at BufferedImage.getRGB and BufferedImage.setRGB.
    	BufferedImage bimage = getViewImage();
    	
    	if (selection != null) {
    		Graphics2D graph = bimage.createGraphics();
            graph.setColor(Color.BLACK);
            graph.fillRect((int)selection.getX(), (int) selection.getY(), (int) selection.getWidth(), (int) selection.getHeight());
    	}
    	        
        BufferedImage histogramBufferedImage = new BufferedImage(256, 256, BufferedImage.TYPE_INT_RGB);

        // Resize input image
        BufferedImage bimageResize = new BufferedImage(256, 256, bimage.getType());	          
	    Graphics2D g = bimageResize.createGraphics();
	    g.drawImage(bimage, 0, 0, 256, 256, null);
	    g.dispose(); 
	    	                       
        List<Integer> red = new ArrayList<Integer>();
        List<Integer> green = new ArrayList<Integer>();
        List<Integer> blue = new ArrayList<Integer>();
        
        // Add RGB values to lists
        for(int x = 0; x < bimageResize.getWidth(); x++)
            for(int y = 0; y < bimageResize.getHeight(); y++) {         	
            	Color c = new Color(bimageResize.getRGB(x,y));
        		red.add(c.getRed());
        		green.add(c.getGreen());
        		blue.add(c.getBlue());
            }
        
        // Find the highest frequency y_max
        int y_max = 0;
        int new_y_max = 0;
        for(int x = 0; x < bimageResize.getWidth(); x++) {   
        	int red_occur = Collections.frequency(red, x);
    		int green_occur = Collections.frequency(green, x);
    		int blue_occur = Collections.frequency(blue, x);
  		
    		new_y_max = Collections.max(Arrays.asList(red_occur, green_occur, blue_occur));
    		
    		if (new_y_max > y_max) {
    			y_max = new_y_max;
    		}
        }
        
        
        // This is not the correct color histogram as required. 
        // But I tried to plot one based on the highest frequency color in each p. 
        for(int x = 0; x < bimageResize.getWidth(); x++) {   
        	
        		int red_occur = Collections.frequency(red, x);
        		int green_occur = Collections.frequency(green, x);
        		int blue_occur = Collections.frequency(blue, x);
        		
        		if( red_occur >= green_occur && red_occur >= blue_occur) {
        			Color myColour = new Color(Collections.max(red), 0, 0);
        			int rgb = myColour.getRGB();	
        			int y_scale = 255 - (int) Math.floor(red_occur * 256 / y_max);
        			for(int y = 255; y > y_scale ; y--) {   
        				histogramBufferedImage.setRGB(x, y, rgb);
        			}        			
        	    }        		
        	    else if (green_occur >= red_occur && green_occur >= blue_occur) {
        	    	Color myColour = new Color(0, Collections.max(green), 0);
        	    	int rgb = myColour.getRGB();	
        	    	int y_scale = 255 - (int) Math.floor(green_occur * 256 / y_max);
        	    	for(int y = 255; y > y_scale; y--) {   
        				histogramBufferedImage.setRGB(x, y, rgb);
        			}
        	    }
        	    else {
        	    	Color myColour = new Color(0, 0, Collections.max(blue));
        	    	int rgb = myColour.getRGB();
        	    	int y_scale = 255 - (int) Math.floor(blue_occur * 256 / y_max);
        	    	for(int y = 255; y > y_scale; y--) {   
        				histogramBufferedImage.setRGB(x, y, rgb);
        			}
        	    	
        	    }	
        	}
        
        showHistogramImage(histogramBufferedImage);
        
        m_HistogramView.setFitHeight(512);
        m_HistogramView.setFitWidth(512);   
    }

    /**
     * Open image from filesystem using OS file chooser and update the image display.
     * 
     * @param stage Owner
     */
    private void openImage(Stage stage) throws FileNotFoundException {
        // TODO: Implement this (Assignment 1.)
    	FileChooser fileChooser = new FileChooser();
        fileChooser.setTitle("Open System File");
        
        File file = fileChooser.showOpenDialog(stage);
        
        if (file != null) {
        	Image image = new Image(file.toURI().toString());      	        
        	m_Imageview.setImage(image);

        	createGUI(stage);
        }
        
    }

    Image generateImage() {
        return new Image(HOME_IMAGE);
    }

}
