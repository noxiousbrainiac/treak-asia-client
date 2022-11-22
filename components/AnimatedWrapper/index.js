import React from 'react';
import { motion } from 'framer-motion';

const AnimatedWrapper = ({ children, options }) => {
	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.5 }}
		>
			<motion.div variants={options}>{children}</motion.div>
		</motion.div>
	);
};

export default AnimatedWrapper;
