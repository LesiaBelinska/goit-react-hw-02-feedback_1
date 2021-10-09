import PropTypes from "prop-types";

export default function Statistics({good, neutral, bad, total, positiveFeedbackPercentage}) {
    return (
        <>
            {total > 0 ? (
                <ul>
                    <li>Good:{good}</li>
                    <li>Neutral:{neutral}</li>
                    <li>Bad:{bad}</li>
                    <li> Total:{total} </li>
                    <li>Positive feedback:{positiveFeedbackPercentage}%</li>
                </ul>
            ) : (
                <p>no feedback</p>
            )}
        </>
    );
}

