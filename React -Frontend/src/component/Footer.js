function Footer(){
    return (
        <>
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3" style={{ backgroundColor: "#f8f9fa" }}>
                &copy; {new Date().getFullYear()} Niyati App. All Rights Reserved.
            </div>
        </footer>
        </>
        
    );
}
export default Footer;