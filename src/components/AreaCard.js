import React from 'react';

export default class AreaCard extends React.Component {

    componentDidMount() {
        let steps = document.querySelectorAll('.step-slider-item');
        steps.forEach((step) => {
            step.addEventListener('click', (e) => {

                let steps = e.target.parentElement.querySelectorAll('.step-slider-item');

                let startStep = [].indexOf.call(steps, e.srcElement);

                for (let i = 0; i < steps.length; i++) {
                    let action = (i > startStep) ? 'remove' : 'add';
                    steps[i].classList[action]('active');
                }
            });
        });
    }

    render () {
        return (
            <div className="card">
                <div className="card__title">{this.props.title}</div>
                <div className="card__flag">
                    <img src="http://vignette1.wikia.nocookie.net/tvpedia/images/3/36/%D0%A4%D0%BB%D0%B0%D0%B3_%D0%A4%D0%B8%D0%BD%D0%BB%D1%8F%D0%BD%D0%B4%D0%B8%D0%B8.svg/revision/latest?cb=20120924042238&path-prefix=ru" alt="" />
                </div>
                <div className="step-slider">
                    <div className="step-slider-item">
                        <span>1</span>
                    </div>
                    <div className="step-slider-item">
                        <span>2</span>
                    </div>
                    <div className="step-slider-item">
                        <span>3</span>
                    </div>
                    <div className="step-slider-item">
                        <span>4</span>
                    </div>
                    <div className="step-slider-item">
                        <span>5</span>
                    </div>
                </div>
            </div>
        );
    }
}