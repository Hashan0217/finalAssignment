import Home from '@/views/Home'
import My from '@/views/My'
import Blog from '@/views/Blog'
import Release from '@/views/Release'
import Message from '@/views/Message'
import blogDetails from '@/views/Blog/blogDetails'
import login from '@/views/Uesr/login'
import register from '@/views/Uesr/register'
export default [
	{ name: "Home", path: "/", component: Home },
	{ name: "My", path: "/my", component: My },
	{ name: "Blog", path: "/article", component: Blog },
	{ name: "Message", path: "/message", component: Message },
	{ name: "Release", path: "/release/:id", component: Release },
	{ name: "BlogDetails", path: "/article/:id", component: blogDetails },
	{ name: "Login", path: "/login", component: login },
	{ name: "Register", path: "/register", component: register },
];
