import { NextResponse } from 'next/server';





export async function GET() {
    return NextResponse.json([
        {
            "title": "Inception",
            "description": "A Docker-based project that sets up multiple services in containers, using Docker Compose to manage WordPress, MariaDB, and NGINX.",
            "UsedLanguages": [
                "Docker",
                "NGINX",
                "WordPress",
                "MariaDB"
            ],
            "ProjectLink": "https://inception.example.com",
            "GithubLink": "https://github.com/yourusername/inception"
        },
        {
            "title": "ft_irc",
            "description": "An IRC server that allows users to chat via different IRC commands like PRIVMSG, JOIN, and NICK.",
            "UsedLanguages": [
                "C++",
                "Networking"
            ],
            "ProjectLink": "https://ft-irc.example.com",
            "GithubLink": "https://github.com/yourusername/ft_irc"
        },
        {
            "title": "CPP Modules",
            "description": "A collection of advanced C++ programming exercises covering topics such as containers, iterators, and algorithms.",
            "UsedLanguages": [
                "C++98"
            ],
            "ProjectLink": "https://cpp-module09.example.com",
            "GithubLink": "https://github.com/yourusername/cpp_module09"
        },
        {
            "title": "webserv",
            "description": "An HTTP server project, simulating the functionality of a simple web server capable of serving static and dynamic content.",
            "UsedLanguages": [
                "C++",
                "Sockets",
                "HTTP"
            ],
            "ProjectLink": "https://webserv.example.com",
            "GithubLink": "https://github.com/yourusername/webserv"
        },
        {
            "title": "NetPractice",
            "description": "A project designed to understand the basics of computer networking, covering IP addresses, subnetting, and routing.",
            "UsedLanguages": [
                "Networking"
            ],
            "ProjectLink": "https://netpractice.example.com",
            "GithubLink": "https://github.com/yourusername/netpractice"
        },
        {
            "title": "cub3d",
            "description": "A 3D game engine built using raycasting techniques, inspired by Wolfenstein 3D, featuring dynamic environments.",
            "UsedLanguages": [
                "C",
                "Raycasting",
                "Graphics"
            ],
            "ProjectLink": "https://cub3d.example.com",
            "GithubLink": "https://github.com/yourusername/cub3d"
        },
        {
            "title": "minishell",
            "description": "A simple shell program built in C, supporting piping, redirections, environment variables, and command execution.",
            "UsedLanguages": [
                "C",
                "Shell"
            ],
            "ProjectLink": "https://minishell.example.com",
            "GithubLink": "https://github.com/yourusername/minishell"
        },
        {
            "title": "Philosophers",
            "description": "A multi-threaded program simulating the Dining Philosophers problem, with a focus on concurrency and resource management.",
            "UsedLanguages": [
                "C",
                "Concurrency",
                "Multithreading"
            ],
            "ProjectLink": "https://philosophers.example.com",
            "GithubLink": "https://github.com/yourusername/philosophers"
        },
        {
            "title": "push_swap",
            "description": "A sorting algorithm project in C, with a focus on optimizing the number of operations to sort a stack of integers.",
            "UsedLanguages": [
                "C",
                "Algorithms"
            ],
            "ProjectLink": "https://push_swap.example.com",
            "GithubLink": "https://github.com/yourusername/push_swap"
        },
        {
            "title": "so_long",
            "description": "A small 2D game where the player must collect items and reach the exit while avoiding enemies, built using a graphics library.",
            "UsedLanguages": [
                "C",
                "Graphics"
            ],
            "ProjectLink": "https://so_long.example.com",
            "GithubLink": "https://github.com/yourusername/so_long"
        },
        {
            "title": "minitalk",
            "description": "A small data exchange program between a client and a server using UNIX signals, allowing for message passing.",
            "UsedLanguages": [
                "C",
                "Signals"
            ],
            "ProjectLink": "https://minitalk.example.com",
            "GithubLink": "https://github.com/yourusername/minitalk"
        },
        {
            "title": "Born2beroot",
            "description": "A system administration project where the goal is to set up a virtual machine and configure it with a secure operating system.",
            "UsedLanguages": [
                "Linux",
                "Bash",
                "System Administration"
            ],
            "ProjectLink": "https://born2beroot.example.com",
            "GithubLink": "https://github.com/yourusername/born2beroot"
        },
        {
            "title": "ft_printf",
            "description": "A custom implementation of the C `printf` function, capable of handling various format specifiers and flags.",
            "UsedLanguages": [
                "C",
                "Formatting"
            ],
            "ProjectLink": "https://ft_printf.example.com",
            "GithubLink": "https://github.com/yourusername/ft_printf"
        },
        {
            "title": "get_next_line",
            "description": "A C function that reads a line from a file descriptor, designed to handle multiple file descriptors at once.",
            "UsedLanguages": [
                "C",
                "File I/O"
            ],
            "ProjectLink": "https://get_next_line.example.com",
            "GithubLink": "https://github.com/yourusername/get_next_line"
        },
        {
            "title": "Libft",
            "description": "A custom implementation of various C standard library functions, created to strengthen understanding of basic C functions.",
            "UsedLanguages": [
                "C",
                "Library Development"
            ],
            "ProjectLink": "https://libft.example.com",
            "GithubLink": "https://github.com/yourusername/libft"
        },
        {
            "title": "ft_transcendence",
            "description": "A full-stack web application featuring a chat and game system with real-time interactions, authentication, and social features.",
            "UsedLanguages": [
                "TypeScript",
                "React.js",
                "Tailwind",
                "WebSockets"
            ],
            "ProjectLink": "https://ft_transcendence.example.com",
            "GithubLink": "https://github.com/yourusername/ft_transcendence"
        }
    ]);
}