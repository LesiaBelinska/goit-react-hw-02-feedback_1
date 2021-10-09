import PropTypes from "prop-types";

export default function Statistics({good, neutral, bad }) {
    return (
        <ul>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
        </ul>
    );
}

// Statistics.PropTypes = {
//     good: PropTypes.number,
//     neutral: PropTypes.number,
//     bad: PropTypes.number,
// }