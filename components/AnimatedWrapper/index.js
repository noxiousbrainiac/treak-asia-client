import React from 'react';
import { motion } from 'framer-motion';

const AnimatedWrapper = ({ children }) => {
	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedWrapper;
