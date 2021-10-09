import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
    <div className="">
        {options.map(option => (
            <button
                className=""
                type="button"
                data-feedback={option}
                onClick={onLeaveFeedback}
                key={option}>
                {option}
            </button>
        ))}
    </div>
);
}


FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};