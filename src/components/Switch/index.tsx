interface SwitchProps {
    className?: string;
    noText?: boolean;
    label: string;
    large?: boolean;
    theme?: string;
    onChange: (e: boolean) => void;
    value?: boolean;
}
const Switch = (props: SwitchProps) => {
    const {className, label, noText, onChange, value} = props;
    let switchClass = className;

    props.large == true ? (switchClass += " switch--large") : null;
    props.noText == true ? (switchClass += " switch--no-text") : null;
    props.theme == "success" ? (switchClass += " switch--success") : null;

    return (
        <div aria-label={label} className={switchClass}>
            <label className="switch__label" htmlFor={label}>
                <input
                    checked={value}
                    role="switch"
                    type="checkbox"
                    className="switch__input"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
                    id={label}
                />
                <span className="switch__text" data-on="ON" data-off="OFF"></span>
                <span className="switch__handle"></span>
            </label>
        </div>
    );
};

export default Switch;
