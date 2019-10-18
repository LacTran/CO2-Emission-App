import Link from 'next/link';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    slide: {
        padding: '.5rem',
        margin: 0,
        minHeight: "95vh",
        color: '#191919',
        textAlign: 'center'
    },
    top: {
        height: '47.5vh',
        width: '100%'
    },
    img: {
        width: '60%',
        height: '100%'
    }
};

const Welcome = () => (
    <div className="swiper">
        <SwipeableViews enableMouseEvents>
            <div style={Object.assign({}, styles.slide)}>
                <button class="brand-button">BRANDING/LOGO</button>
            </div>
            <div style={Object.assign({}, styles.slide)}>
                <button class="brand-button">BRANDING/LOGO</button>
                <div style={Object.assign({}, styles.top)}>
                    <img style={Object.assign({}, styles.img)} src="/womanandplantimageslice@3x.png" alt="womanandplant" />
                </div>
            </div>
            <div style={Object.assign({}, styles.slide)}>
                <button class="brand-button">BRANDING/LOGO</button>
            </div>
        </SwipeableViews>
        <style jsx>
            {`
            `}
        </style>
        {/* <div>
            <img src="" alt="random svg" />
            <p>Welcome Karoliina</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde.</p>
            <Link href='/main'>
                <a>Let's starts</a>
            </Link>
        </div> */}
    </div>
);

export default Welcome;