import React, {useState} from 'react';
import NagigationItem from './NavigationItem/NavigationItem';
import './navigation.scss'

const Navigation = () => {
    const categories = [
        'Theme',
        'Editing',
        'Camera Action, Angle',
        'Sound, Beat',
        'Graphical',
        'Experimental',
        'Elements',
        'Car',
        'Gun',
        'Doll'
    ]
    const [list, setList] = useState(categories)

    const handlePrevClick = () => {
        const cates = [...list]
        console.log(cates);
        const spliceI = cates.splice(0,1);
        cates.push(spliceI[0]);
        setList(cates)
    }

    const handleNextClick = () => {
        const cates = [...list]
        console.log(cates);
        const spliceI = cates.splice(cates.length-1,1);
        spliceI.push(...cates)
        setList(spliceI)
    }



    return (
        <div className="navigation">  
            <div className="navigation-wrapper">
                {
                    list.map(
                            cate => cate === "Experimental" 
                            ? <NagigationItem key={cate} text={cate} focus="focus"/>
                            : <NagigationItem key={cate} text={cate}/>
                        )
                }
            </div>

            <button className="navigation-btn navigation-prev" onClick={handlePrevClick}>
                <i class="fa-solid fa-angle-left"></i>
            </button>
            <button className="navigation-btn navigation-next" onClick={handleNextClick}>
                <i class="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
}

export default Navigation;
