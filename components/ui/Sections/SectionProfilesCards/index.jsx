import React from 'react';
import ProfileCard from 'components/ProfileCard';
import Container from 'components/ui/Container';

const SectionProfilesCards = ({ data, id }) => {
	return (
		<section id={id}>
			<Container>
				<div className="py-5 flex flex-col">
					{data.length > 0 &&
						data?.map((profileData) => (
							<ProfileCard key={profileData.sys.id} profileData={profileData} />
						))}
				</div>
			</Container>
		</section>
	);
};

export default SectionProfilesCards;
