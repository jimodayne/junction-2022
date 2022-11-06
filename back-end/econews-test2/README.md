Serverless Function on Google Cloud Functions Compress Image
----

Run the function:
----

mvn function:run


Deploy to GCP
----

----
gcloud functions deploy {function-name} \
--entry-point org.springframework.cloud.function.adapter.gcp.GcfJarLauncher \
--runtime java17 \
--trigger-http \
--source target/deploy \
--memory 512MB
----

Package the application.
----
mvn package