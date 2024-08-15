import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion"


const navLinks = [
    {
        name: 'Home',
        link: 'home'
    },
    {
        name: 'Services',
        link: 'services'
    },
    {
        name: 'About Us',
        link: 'about'
    },
    {
        name: 'Pricing',
        link: 'pricing'
    },
    {
        name: 'Testimonial',
        link: 'testimonial'
    }
]



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    const handleScroll = () => {
        const sections = ['home', 'services', 'about', 'pricing', 'testimonial','contact'];
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop;
                const height = element.offsetHeight;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                    setActiveSection(section);
                }
            }
        })
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            })
        }
    }

    return (
        <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
            <div className='container mx-auto flex justify-between items-center h-full'>
                {/* logo */}
                <div>
                    <a href="/">
                        <img src="/logo.svg" alt="" />
                    </a>
                </div>
                {/* navLink */}
                <div className='hidden md:flex flex-grow justify-center'>
                    <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
                        {
                            navLinks.map((item, index) => (
                                <li key={index}>
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={`#${item.link}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleCloseMenu();
                                            handleScrollTo(item.link);
                                        }}
                                        className={`text-white ${activeSection === item.link ? 'isActive' : ''}`}>
                                        {item.name}
                                    </motion.a>
                                </li>

                            ))
                        }
                    </ul>
                </div>
                {/* button */}
                <div className='hidden md:block'>
                    <a 
                    onClick={e=>{
                        e.preventDefault();
                        handleScrollTo('contact')
                    }}
                    href="#contact"
                        className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'
                    >
                        Contact Us
                    </a>

                </div>
                {/* hamburger menu */}
                <div className='block md:hidden'>
                    <button
                        className={`text-white focus:outline-none ${isOpen ? 'border border-white' : ''}`}
                        onClick={handleToggle}
                    >
                        <IoMdMenu className="size-6" />
                    </button>

                </div>
            </div>
            {/* mobile nav items */}
            {
                isOpen && (
                    <nav className="absolute top-full left-0 w-full bg-heroBg md:hidden">
                        <ul className='flex flex-col p-4 space-y-3'>
                            {
                                navLinks.map((item, index) => (
                                    <li key={index}>
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            href={`#${item.link}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleCloseMenu();
                                                handleScrollTo(item.link);
                                            }}
                                            className={`text-white ${activeSection === item.link ? 'isActive' : ''}`}>
                                            {item.name}
                                        </motion.a>
                                    </li>
                                ))
                            }
                            <li>
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleCloseMenu();
                                        handleScrollTo('contact')
                                    }}
                                    href="#contact" className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>

                )
            }
        </header>
    )
}

export default Navbar