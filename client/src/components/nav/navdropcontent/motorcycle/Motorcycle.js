import React, { useState } from 'react';
import NavItemCollapse from '../../NavItemCollapse';
import Bike from './Bike';
import BikeCategory from './BikeCategory';

const Motorcycle = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div id='motorcycle'>
			<button
				onClick={handleToggle}
				style={{ color: isOpen && '#a32424' }}
				className='select-a-range-toggle'>
				Select a Range{' '}
				{!isOpen ? (
					<i className='fas fa-plus'></i>
				) : (
					<i className='fas fa-minus'></i>
				)}
			</button>
			<NavItemCollapse
				isOpen={isOpen}
				id={true}
				className={`nav-item-collapse select-a-range`}
				timing='500'>
				<ul>
					<li>
						<button>Roadsters &amp; Supersports</button>
					</li>
					<li>
						<button>Adventure</button>
					</li>
					<li>
						<button>Modern Classics</button>
					</li>
					<li>
						<button>Rocket 3</button>
					</li>
					<li>
						<button>Triumph Factory Custom</button>
					</li>
					<li>
						<button>E-Bike</button>
					</li>
				</ul>
			</NavItemCollapse>

			<BikeCategory
				id='nav-roadsters-and-supersports'
				title='Roadsters &amp; Supersports'>
				<Bike
					id='nav-new-speed-triple-1200-rs'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/pb1%20speed%20triple/navigation%20images/enlarged-speed-triple-navigation--rhs-770x473.png'
					name='New Speed Triple 1200 RS'
					priceFrom='18,300.00'
				/>
				<Bike
					id='nav-new-trident-660'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/trident/navigation%20images/trident-660-launch-rhs-770x433.png'
					name='New Trident 660'
					priceFrom='8,095.00'
				/>
				<Bike
					id='nav-street-triple'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/street%20triple%202020/street%20triple%20rs%202020/my20-street-triple-rs-resized-770x433px.png'
					name='Street Triple'
					priceFrom='10,800.00'
				/>
				<Bike
					id='nav-daytona-moto2-765'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/configurator/daytona-770x483.png'
					name='Daytona Moto2 765'
					priceFrom='17,500.00'
				/>
				<Bike
					id='nav-speed-triple'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/home/primary%20navigation/bike%20item%20images/nn6-rhs-matt-jet-black-770x433/speed-triple-my20-rhs-matt-jet-black-new-decal_770_433.png'
					name='New Speed Triple'
					priceFrom='14,350.00'
				/>
			</BikeCategory>

			<BikeCategory id='nav-adventure' title='Adventure'>
				<Bike
					id='nav-new-tiger-850-sport'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/trident/navigation%20images/trident-660-launch-rhs-770x433.png'
					name='New Tiger 850 Sport'
					priceFrom='11,995.00'
				/>
				<Bike
					id='nav-new-tiger-900-range'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/trident/navigation%20images/trident-660-launch-rhs-770x433.png'
					name='New Tiger 900 Range'
					priceFrom='14,700.00'
				/>
				<Bike
					id='nav-new-tiger-1200-range'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/trident/navigation%20images/trident-660-launch-rhs-770x433.png'
					name='New Tiger 1200 Range'
					priceFrom='16,500.00'
				/>
			</BikeCategory>

			<BikeCategory id='nav-modern-classics' title='Modern Classics'>
				<Bike
					id='nav-new-bonneville-speedmaster'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/trident/navigation%20images/trident-660-launch-rhs-770x433.png'
					name='New Bonneville Speedmaster'
					priceFrom='13,150.00'
				/>
				<Bike
					id='nav-new-bonneville-t120'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/trident/navigation%20images/trident-660-launch-rhs-770x433.png'
					name='New Bonneville T120'
					priceFrom='12,050.00'
				/>
				<Bike
					id='nav-new-street-twin'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/trident/navigation%20images/trident-660-launch-rhs-770x433.png'
					name='New Street Twin'
					priceFrom='9,400.00'
				/>
				<Bike
					id='nav-new-bonneville-t100'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/trident/navigation%20images/trident-660-launch-rhs-770x433.png'
					name='New Bonneville T100'
					priceFrom='10,500.00'
				/>
				<Bike
					id='nav-new-bonneville-bobber'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/trident/navigation%20images/trident-660-launch-rhs-770x433.png'
					name='New Bonneville Bobber'
					priceFrom='13,150.00'
				/>
				<Bike
					id='nav-thruxton-rs'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/trident/navigation%20images/trident-660-launch-rhs-770x433.png'
					name='New Thruxton RS'
					priceFrom='16,200.00'
				/>
				<Bike
					id='nav-speed-twin'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/trident/navigation%20images/trident-660-launch-rhs-770x433.png'
					name='Speed Twin'
					priceFrom='12,200.00'
				/>
				<Bike
					id='nav-new-scrambler-1200'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/trident/navigation%20images/trident-660-launch-rhs-770x433.png'
					name='New Scrambler 1200'
					priceFrom='14,000.00'
				/>
				<Bike
					id='nav-street-scrambler'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/trident/navigation%20images/trident-660-launch-rhs-770x433.png'
					name='Street Scrambler'
					priceFrom='11,000.00'
				/>
			</BikeCategory>

			<BikeCategory id='nav-rocket-3' title='Rocket 3'>
				<Bike
					id='nav-rocket-3'
					img='https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my21/trident/navigation%20images/trident-660-launch-rhs-770x433.png'
					name='Rocket 3'
					priceFrom='22,500.00'
				/>
			</BikeCategory>
		</div>
	);
};

export default Motorcycle;
