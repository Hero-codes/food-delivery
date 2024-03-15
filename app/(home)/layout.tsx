import { Footer } from "../../components/shared/footer";
import { Navbar } from "../../components/shared/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex flex-col">
            <Navbar />

            <main className="pt-28">
                {children}
            </main>

            <Footer />
        </div>
    )
};

export default HomeLayout;