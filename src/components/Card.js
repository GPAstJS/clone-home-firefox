export default function Card({recursos}) {
    return (
        <a  className='card' href={recursos.href} style={
            {
                display: 'flex',
                textDecoration: 'none',
                color: "fff",
                flexDirection: 'column',
                padding: '10px 0px 0px 0px',
                justifyContent: 'space-evenly',
                alignItems: "center",
                border: '1px solid black',
                borderRadius: '10px',
                width: '125px',
                margin: '15px',
                height: 'auto',
                background: "#1B1B1B"
            }
        }>
        <img src={recursos.src} style={{
          width: '50x',
          height: '50px'
        }}/>
        <p style={
            {
                color: '#fff'
            }
        }>{recursos.nome}</p>
      </a>
    )
}