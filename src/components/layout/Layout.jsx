import image from '../../assets/background.jpg'
import PropTypes from 'prop-types';

export default function Layout({ children }) {

    return (
        <div className="relative w-full h-screen  md:py-0">
            <div className='absolute w-full h-full bg-pink-primary/80 -z-[1] inset-0'></div>
            <img src={image} alt="quizy quiz background" className='absolute object-cover -z-[2] w-full h-full inset-0' loading='lazy' />
            <div className='flex flex-col justify-center items-center h-full md:h-screen'>
                {children}
            </div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};