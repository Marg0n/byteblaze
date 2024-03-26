
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const EmptyState = ({ message, address, label }) => {
    return (
        <div className="flex flex-col gap-6 min-h-[calc(100vh-142px)] justify-center items-center">
            <p className='text-primary text-xl lg:text-3xl font-semibold'>{message}</p>
            <Link
                to={address}
                className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                <span className="relative text-black group-hover:text-white">
                    {label}
                </span>
            </Link>
        </div>
    );
};

EmptyState.propTypes = {
    message: PropTypes.string,
    address: PropTypes.string,
    label: PropTypes.string,
}

export default EmptyState;