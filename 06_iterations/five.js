function reverseWords(str) {
    let st = []

    for(let i = 0; i < str.length; i++)
    {
        if(str[i] != ' ') 
            st.unshift(str[i])

            else{
                while(st.length != 0) {
                    console.log((st[0]));
                    st.shift()
                }
                console.log(' ');
            }
    }

    while(st.length != 0){
        console.log(st[0]);
        st.shift()
    }

    let str =  "Geeks for geeks"

    reverseWords(str)

}