import background from '../../../assets/images/bg.png';
import Chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    let footer = <p className='mt-3 rounded-full p-2 font-bold bg-secondary'>Please pick a day.</p>;
    if (selectedDate) {
        footer = <p className='mt-3 rounded-full p-2 font-bold bg-secondary'>You picked {format(selectedDate, 'PP')}.</p>;
    }
    return (
        <header className='my-8'>
            <div className="hero" style={{
                backgroundImage: `url('${background}')`
            }} >
                <div className="hero-content gap-28 flex-col lg:flex-row-reverse">
                    <img alt="" src={Chair} className="rounded-lg lg:w-1/2 shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            footer={footer}
                        />
                    </div>
                </div>
            </div >
        </header>
    );
};

export default AppointmentBanner;