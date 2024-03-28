import Section from "../components/Section"

function Home() {

  const items = [
    {
      id: 1,
      title: "Soundtracks - OST",
      description: 'Original Soundtracks'
    }
  ]

  return (
    <div>
      <Section
        title = "Recently played"
        more = "/random"
        items = {items}
      />
    </div>
  )
}

export default Home
