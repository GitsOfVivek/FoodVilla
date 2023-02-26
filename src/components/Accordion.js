import React, { useState } from 'react';
import './Accordion.css';

const Section = ({
	id,
	title,
	description,
	visibleSection,
	setVisibleSection,
}) => {
	return (
		<div
			style={{
				border: '1px solid #000',
				margin: '10px auto',
				width: '80%',
			}}>
			<div
				onClick={() =>
					visibleSection
						? setVisibleSection('')
						: setVisibleSection(id)
				}
				style={{
					display: 'flex',
					gap: '5px',
					alignItems: 'center',
					justifyContent: 'space-between',
					cursor: 'pointer',
					backgroundColor: '#00000025',
					padding: '0 20px',
				}}>
				<span
					style={{
						fontSize: '30px',
						fontWeight: '700',
					}}>
					{title}
				</span>
				<div style={{ margin: '0 10px' }}>
					{visibleSection ? 'Hide' : 'Show'}
				</div>
			</div>

			{visibleSection && (
				<div style={{ padding: '0 20px', backgroundColor: '#eee' }}>
					{description}
				</div>
			)}
		</div>
	);
};

const Accordion = () => {
	const [visibleSection, setVisibleSection] = useState('');
	return (
		<>
			<Section
				id="about"
				title={'ABOUT'}
				description={`Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.`}
				visibleSection={visibleSection === 'about'}
				setVisibleSection={setVisibleSection}
			/>
			<Section
				id="services"
				title={'SERVICES'}
				description={`Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.`}
				visibleSection={visibleSection === 'services'}
				setVisibleSection={setVisibleSection}
			/>
			<Section
				id="career"
				title={'CAREER'}
				description={`Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.`}
				visibleSection={visibleSection === 'career'}
				setVisibleSection={setVisibleSection}
			/>
		</>
	);
};

export default Accordion;
