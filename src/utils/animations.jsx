export const homeAnimations = {
    arrowAnimation: {
        y: [0, -15, 0],
        scale: 1.1,
        transition: {
            type: "spring",
            stiffness: 550,
          x: {
            repeat: Infinity,
            duration: 0.6,
            
          },
          y: {
            repeat: Infinity,
            duration: .9,
            ease: 'easeOut',
          },
        },
    }
}