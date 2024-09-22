"use client";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
// const AwwardLinkHoverImg = () => {
//   return (
//     <div className="h-screen p-8">

//       <Link
//         href="#"
//         Img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//         title="Portfolio"
//         subtitle="This part I show som of my work"
//       />
//       <Link
//         href="#"
//         Img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//         title="Contact Me"
//         subtitle="Get in touch and let's work together"
//       />
//     </div>
//   );
// };

// export default AwwardLinkHoverImg;
type Props = {
  href: string;
  Img: string;
  title: string;
  subtitle: string;
};
const LinkHover = ({ href, Img, title, subtitle }: Props) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = (ref.current as HTMLElement | null)?.getBoundingClientRect();
    if (!rect) return;
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const left = useTransform(xSpring, [-0.5, 0.5], ["40%", "70%"]);
  const top = useTransform(ySpring, [-0.5, 0.5], ["40%", "70%"]);

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      href={href}
      className="group flex relative items-center justify-between border-b- border-neutral-700 py-3 hover:border-neutral-50"
    >
      <div>
        <motion.span
          variants={{
            initial: {
              x: 0,
            },
            whileHover: {
              x: -16,
            },
          }}
          transition={{
            type: "spring",
            delayChildren: 0.25,
            staggerChildren: 0.07,
          }}
          className="text-lg relative block font-medium text-foreground group-hover:text-neutral-300 transition-colors duration-500"
        >
          {title.split("").map((l) => (
            <motion.span
              key={l}
              variants={{
                initial: {
                  x: 0,
                },
                whileHover: {
                  x: 16,
                },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="mt-1 block text-neutral-700 group-hover:text-neutral-300 transition-colors duration-500">
          {subtitle}
        </span>
      </div>
      <motion.img
        variants={{
          initial: {
            scale: 0,
            rotate: "-12.5deg",
          },
          whileHover: {
            scale: 1,
            rotate: "12deg",
          },
        }}
        transition={{ type: "spring" }}
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        src={Img}
        alt="Image scale"
        className="absolute size-20 rounded-2xl object-cover md:size-28"
      />
      <div>
        <p>Jan 22, 2024</p>
      </div>
      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            opacity: 1,
            x: "0%",
          },
        }}
        transition={{ type: "spring" }}
        className="relative p-4 z-10"
      >
        <FaArrowRight className="text-2xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
export default LinkHover;
