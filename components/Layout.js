import Head from "next/head";

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>TodoList</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
            </Head>
            <style jsx global>{`
            * { 
              box-sizing: border-box; 
              margin: 0; 
              padding: 0 
            }
            html {
              width: 100%;
              height: 100%;
            }
            body { 
              background: #eee;
              width: 100%;
              min-height: 100%;
              font-family: Lato, sans-serif;
             }
      
             .card {
              margin: auto;
              transition: all .3s;
              transform: translateY(100px);
              box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
              display: flex;
              flex-direction: column;
              font-size: 16px;
              font-weight: 400;
              min-height: 200px;
              overflow: hidden;
              width: 330px;
              z-index: 1;
              position: relative;
              background: #CCCC99;
              border-radius: 2px;
              box-sizing: border-box; 
              border-radius: 10px;
            }
      
            .card-title {
              display: flex;
              flex-direction: row;
              justify-content: center;
              padding: 10px;
            }
      
      
            form {
              background: #FFFFFF;
              padding: 10px;
              width: 100%;
              display: flex;
              flex-direction: row;
            }
            form > input {
            flex:1;
            padding-left: 3px;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
            border: 1px solid #ddd;
            font-size: 20px;
            color: white;
            }
      
            form > input:focus {
                background-color: #990033;
                border: none;
            }
      
            form > button {
              background-color: #8D5924;
              border: none;
              text-align: center;
              font-size: 20px;
              cursor: pointer;
              color: #5696BC;
            }
            ul {
              min-height: 100px;
              margin: 0;
              padding: 0;
              text-align: left;
              list-style: none;
            }
            ul li {
              padding: 10px;
              background: #CCCC99;
              border-bottom: 1px solid #EEE;
            }
            ul li:nth-child(2n) {
              background: #666633;
            }
            ul li:last-child {
              border-bottom: none;
            }
      
            .list-item {
              display: flex;
              flex-direction:row;
              justify-content: space-between;
              align-items: center;
            }
      
            .btn-remove{
              height: 30px;
              min-width: 30px;
              width: 30px;
              background: #E04836;
              color: #5696BC;
              font-size: 20px;
              border-radius:10px;
              padding: 0;
              box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24);
            }

            `}</style>
            <div className="container">
            {props.children}
            </div>
        </div>
    )
}

export default Layout;
