import React,
{
  useState,
} from 'react';
import { motion } from 'framer-motion';

const Welcome = () => {
  const [items, setItems] = useState(['hi', 'how', 'are', 'you?']);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
    </motion.nav>
  );
}

export default Welcome;