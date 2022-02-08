import { useSpring } from "framer-motion"

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
    arrowAnimation2: {
      y: [-15, 0, -15],
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
          duration: 1.5,
        }
      }
    }



}

export const aboutAnimations = {
  pageEnter: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        duration: .5
      },
      opacity: {
        duration: .5
      }
    }
  },
  pageExit: {
    y: "-120%",
    opacity: 0,
    transition: {
      y: {
        duration: 1
      },
      opacity: {
        duration: 1
      }
    }
  },
  pageInitial: {
    y: "50%",
    opacity: 0,
  }
}

export const textBounce = {
  test: {
    scale: [.9, 1, .9],
    transition: {
      type: "spring",
      bounce: 1,
      scale: {
        duration: 1,
        repeat: 1.5
      }
    }
  },
}

export const footerAnimations = {
  initial: {
    opacity: 0,
    transition: {
      type: "spring",
      bounce: .7,
      opacity: {
        duration: .1,
      }
    }
  },
  animate: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 1.2
      }
    }
  },
  exit: {

  }
}

