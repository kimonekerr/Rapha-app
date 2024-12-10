import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import AmbulanceBody from './ambulance/AmbulanceBody';
import EmergencyLights from './ambulance/EmergencyLights';
import AnimatedPath from './ambulance/AnimatedPath';

export default function AmbulanceAnimation() {
  const controls = useAnimation();

  React.useEffect(() => {
    let isActive = true;

    const animate = async () => {
      // Initial position
      await controls.start({
        x: 100,
        y: 50,
        rotate: 0,
        transition: { duration: 0 }
      });

      while (isActive) {
        await controls.start({
          x: [100, 300, 500, 700],
          y: [50, 20, 80, 50],
          rotate: [0, -10, 10, 0],
          transition: {
            duration: 8,
            times: [0, 0.33, 0.66, 1],
            ease: "easeInOut",
          }
        });

        if (isActive) {
          // Only reset if the component is still mounted
          await controls.start({
            x: 100,
            y: 50,
            rotate: 0,
            transition: { duration: 0 }
          });
        }
      }
    };

    animate();

    // Cleanup function
    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatedPath />
      
      <motion.div
        animate={controls}
        initial={{ x: 100, y: 50, rotate: 0 }}
        className="absolute"
        style={{ width: '80px', height: '50px' }}
      >
        <div className="relative w-full h-full">
          <AmbulanceBody />
          <EmergencyLights />
        </div>
      </motion.div>
    </div>
  );
}