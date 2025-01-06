import bgvid from '/assets/videos/bgpubg.mp4'
import '../home/intro.css'
function Intro({handleClick}) {
    return (
        <>
            <div className='maincont relative'>
                <div >
                    <video autoPlay loop muted src={bgvid}></video>
                    <div class="intro-button button" id="intro-btn" onClick={handleClick}>
                        <div class="border">
                            <div class="left-plane"></div>
                            <div class="right-plane"></div>
                        </div>
                        <div class="text">Enter</div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Intro;