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
    },
    pageExit: {
      y: "-120%",
      opacity: 0,
      transition: {
        y: {
          duration: 1,
          ease: 'easeOut',
        },
        opacity: {
          duration: .3
        }
      },
    },
    pageInitial: {
      opacity: 0,
    },
    pageEnter: {
      opacity:  1,
      transition: {
        opacity: {
          duration: 2,
        }
      }
    }



}