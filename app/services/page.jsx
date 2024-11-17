import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const services = () => {
    return (
        <section className="herobg md:h-full flex flex-col p-10 items-center gap-10">
            <h1 className="flex text-4xl">Services</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 h-full w-full  justify-center items-center p-10 gap-10">
                <Card className="flex flex-col h-[100%] border-2 border-black rounded-xl items-center hover:bg-companybg hover:text-white hover:translate-x-3">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col h-[100%] border-2 border-black rounded-xl items-center hover:bg-companybg hover:text-white hover:translate-x-3">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col h-[100%] border-2 border-black rounded-xl items-center hover:bg-companybg hover:text-white hover:translate-x-3">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col h-[100%] border-2 border-black rounded-xl items-center hover:bg-companybg hover:text-white hover:translate-x-3">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col h-[100%] border-2 border-black rounded-xl items-center hover:bg-companybg hover:text-white hover:translate-x-3">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col h-[100%] border-2 border-black rounded-xl items-center hover:bg-companybg hover:text-white hover:translate-3 hover:transition-opacity">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>

            </div>
        </section>
    );
};

export default services;
