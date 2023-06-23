import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// ******* Step = 1 ********************
// >>>>>>>>Appcontext create kanaa<<<<<<<<<<

// 1st kaam tha create karnaa ....
export const AppContext = createContext();

// 2nd kaam tha provider create karna 

export default function AppContextProvider({ children }) {
    // yaha par children usko signify kar raha hai jo AppcontextProvider  components ke inside hai

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    const [totalPages, setTotalPages] = useState(null);    // Isme to pata bhi nahi ki kitna kare or empty bhi nahi kar sakte to null kar dete hai 

    // Abhi tak humne sirf container liya hai isme saaman nahi hai matlab khali hai 
    // data filling pending 


    // Default value page = 1 rakh diye 
    async function fetchBlogPost(page = 1) {
        // ------------------------------------------------------------------------------------------------------------
        setLoading(true);
        // jab tak data ayyega tab tak loding true rahe matlab spinner ghumega 

        let url = `${baseUrl}?page=${page}`;


        try {
            const result = await fetch(url);
            const data = await result.json();
            //    yaha se mera API ka response aa jayegga 
            console.log("I am inside Appcontext")
            console.log(data);

            //  Now mai abb sare state ko set karna chhahta hu ==> json se dekh kar help le sakte ho
            // ********** VERY IMPORTANT *********
            // with the help of json file humlog set kar rahe hai 

            // console.log(data.posts);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
            // json me jo name dikh raha wahi likhe rahe hai 
            console.log("checking")
            console.log(data.posts);
            setPage(data.page);

            // console.log(data.totalPages);
            // console.log("Total page")
            // console.log(data.totalPages)
            
        }
        catch (error) {

            console.log("Error in fetching Data ");
            setPage(1);
            setPosts([]);
            setTotalPages(null)

        }
        //  -------------------------------------------------------------------------------------------------
        //  Data ko abb maine retrive kar liye hai ya fetch kar liya haii
        setLoading(false);
    }

    function HandlePageChange(page) {
        // next click kiya hoga page agge ka hogaya hoga let agar page= 2 hoga then page = 3 hogaya 
        setPage(page);

        fetchBlogPost(page);
    }


    // hume ek object create kar lena hai value ka ===>> jo ki saara ka sara data send karege consumer ko 
    // value basically ek object hai jismee sara ka sara required data hai 
    // yahi hai snapshoot 
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        HandlePageChange

    };
    
    // *************** step = 2 *******
    // >>>>>>>>>>>>>>>Provider apply karna <<<<<<<<<<

    // Yaha se humne data pass kar diya App component ko 
    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>


}