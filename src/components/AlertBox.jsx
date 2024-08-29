import PropTypes from 'prop-types';
const AlertBox = ({ message, status }) => {
    return (
        <>
            <div className={`w-full col-span-4 mb-10 ${status == "1" ? 'bg-green-300 text-green-800' : 'bg-red-200 text-red-800'}  p-2 text-sm`}>
                {message}
            </div>
        </>
    )
}
AlertBox.propTypes = {
    message: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired
}

export default AlertBox