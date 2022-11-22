import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from 'components/ProfileCard';
import Container from 'components/ui/Container';
import AnimatedWrapper from 'components/AnimatedWrapper';
import { xAnimateOptions } from 'utils/constants';
import useSectionProps from './useSectionProps';

const SectionProfilesCards = (props) => {
	const { classname, data } = useSectionProps(props);
	return (
		<section className={classname}>
			<Container>
				{data?.length > 0 &&
					data.map((profileData) => (
						<AnimatedWrapper key={profileData.sys.id}>
							<motion.div variants={xAnimateOptions}>
								<ProfileCard profileData={profileData} />
							</motion.div>
						</AnimatedWrapper>
					))}
			</Container>
		</section>
	);
};

export default SectionProfilesCards;
