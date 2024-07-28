import PropTypes from 'prop-types';
const Step = ({icon, title, desc}) => {
    return (
        <>
            <button className="w-full text-start flex p-3">
                <div className="size-8">
                    <div className="icon w-full h-full relative leading-8 grid place-content-center text-center rounded-full text-white bg-gray-800">
                        {icon}
                    </div>
                </div>
                <div className="w-[calc(100%-2rem)] ps-4">
                    <h4 className="text-gray-500 text-sm">{title}</h4>
                    <p className="text-black text-sm">{desc}</p>
                </div>
            </button>
        </>
    )
}
Step.propTypes = {
    icon: PropTypes.node,
    desc: PropTypes.string, 
    title: PropTypes.string
  }
  

export default Step