"use client";
import React from "react";
import AuthorCard from "@/components/AuthorCard";
import CommentSection from "@/components/CommentSection";
import Footer from "@/components/Footer";

const posts = [
  {
    id: "1",
    title: "Makli Necropolis",
    description:
      "Makli Necropolis, spanning over ten square kilometers, is one of the world's largest burial sites with origins tracing back to the 14th century. It's a significant historical and architectural landmark, serving as a burial ground for the elites, including rulers, scholars, and saints from the Samma, Arghun, Tarkhan, and Mughal dynasties. Each dynasty's unique architectural styles and decorations are evident in the tombs and mausoleums, reflecting Islamic and local elements.The necropolis is famous for its intricately carved tombstones and mausoleums, adorned with geometric patterns, floral motifs, and calligraphy, showcasing the region's artistic heritage. Clusters of royal mausolea, including those of revered Sufi saints and scholars, attract many visitors.Recognized as a UNESCO World Heritage Site in 1981, Makli Necropolis stands as a testament to the cultural, historical, and artistic richness of the Sindhi civilization. It continues to draw scholars, historians, and tourists, offering a unique glimpse into the lives and legacies of the region's past inhabitants.",
    image: "../images/Makli Necropolis.jpg",
  },
  {
    id: "2",
    title: "Ranikot Fort",
    description:
      "Nestled near Sann in the Jamshoro District of Pakistan, Ranikot Fort is the world's largest fort, boasting an impressive circumference of approximately 32 kilometers. Often dubbed the Great Wall of Sindh, it serves as a monumental testament to the region's military prowess. This vast fortress, believed to date back to the 18th century, encompasses massive walls and imposing bastions that offer breathtaking panoramic views. Its strategic location and formidable defenses highlight its historical significance as a military stronghold.Exploring Ranikot Fort provides a unique opportunity to delve into the rich military history of Sindh while marveling at the sheer scale and architectural brilliance of this colossal structure.",
    image: "../images/Ranikot Fort.jpg",
  },
  {
    id: "3",
    title: "Keenjhar Lake",
    description:
      "Keenjhar Lake, also known as Kalri Lake, is one of the largest freshwater lakes in Pakistan, located in Thatta, Sindh. Stretching around 24 kilometers in length and covering an area of approximately 134 square kilometers, it serves as a crucial water reservoir for Karachi.      This picturesque lake is a popular destination for picnickers, bird watchers, and nature enthusiasts alike. Its serene environment and scenic beauty make it an ideal spot for relaxation and recreation. Visitors often enjoy boating, fishing, and picnicking along the lakeshore. The lake's diverse ecosystem supports a variety of bird species, making it a haven for birdwatching. Keenjhar Lake is also rich in cultural heritage, being intimately linked to the folklore of Noori Jam Tamachi. This poignant tale tells the story of a prince, Jam Tamachi, who falls in love with Noori, a humble fisherwoman. Their love story has been immortalized in Sindhi literature and continues to captivate the imagination of visitors.The lake's tranquil waters and lush surroundings provide a perfect escape from the hustle and bustle of city life, offering a peaceful retreat for those seeking a connection with nature and history.",
    image: "../images/Keenjhar Lake.jpg",
  },
  {
    id: "4",
    title: "Kirthar National Park",
    description:
      "Kirthar National Park, located in the Kirthar Mountains of Sindh, Pakistan, is one of the country's largest and most diverse national parks, covering over 3,000 square kilometers. Established in 1974, this expansive park is a sanctuary for a wide range of wildlife, including leopards, Indian wolves, striped hyenas, urial (wild sheep), chinkara gazelles, Sindh ibex, and blackbuck antelopes. These species roam freely in the park's rugged terrain, which is characterized by dry valleys, rocky hills, and stony landscapes. The park's rich biodiversity and stunning landscapes make it a prime location for both trekking and wildlife photography.Kirthar National Park also holds significant historical value, as it encompasses the Ranikot Fort, one of the largest forts in the world. This adds a unique element of cultural heritage to the natural beauty of the park. Visitors can explore the fort while enjoying the panoramic views it offers. The park provides several trails and routes for trekking enthusiasts, allowing them to experience its majestic scenery up close.Conservation efforts in the park are focused on protecting its unique biodiversity and restoring populations of endangered species. The park is part of a protected area complex that includes the Hub Dam Wildlife Sanctuary and Mahal Kohistan Wildlife Sanctuary, highlighting its importance in regional conservation initiatives.For those looking to immerse themselves in nature, Kirthar National Park offers camping facilities and rest houses managed by the Sindh Wildlife Department. The best time to visit is from November to March, when the weather is cooler and the wildlife more active. Accessible by four-wheel drive vehicles, the park's unpaved roads promise an adventurous journey through one of Pakistan's most captivating natural landscapes. Whether you're a nature enthusiast, a history buff, or a photography lover, Kirthar National Park provides a rich and rewarding experience",

    image: "../images/Kirthar National Park.jpg",
  },
  {
    id: "5",
    title: "Mohatta Palace Museum",
    description:
      "The Mohatta Palace Museum, situated in Karachi, Pakistan, is a remarkable architectural and cultural gem built in 1927. Designed by the renowned architect Agha Ahmed Hussain, the palace was commissioned by Shivratan Chandraratan Mohatta, a wealthy Marwari businessman, who intended it to be a summer retreat for his family. The palace is an exquisite example of Rajput architecture, featuring a blend of pink Jodhpur stone and local yellow Gizri stone. Its facade is adorned with intricate carvings, domes, and balustrades, showcasing the rich craftsmanship of the period.The palace covers an extensive area, with large, elegant rooms on the ground floor for entertaining guests, and more private, family-oriented spaces on the upper floors. One of the palace's unique features is a small temple dedicated to the Hindu deity, Lord Shiva, located on the terrace. Over the years, the Mohatta Palace has undergone significant restoration efforts to preserve its historical and architectural integrity.Today, the Mohatta Palace serves as a museum that houses a rich collection of Sindh's cultural and artistic heritage. Its exhibits include traditional crafts, textiles, historical artifacts, and contemporary artworks, reflecting the diverse artistic traditions of the region. The museum regularly hosts exhibitions that explore various themes related to Pakistan's history, culture, and heritage.Visitors to the Mohatta Palace Museum can also enjoy its beautifully landscaped gardens, which provide a serene and picturesque environment for reflection and relaxation. The gardens are meticulously maintained and feature a variety of plants and flowers, adding to the overall charm of the palace.The museum also plays an active role in promoting education and cultural awareness through its various programs, workshops, and events. These initiatives aim to celebrate and preserve the rich cultural heritage of Sindh, making the Mohatta Palace Museum not just a historical landmark, but also a vibrant cultural center.Overall, a visit to the Mohatta Palace Museum offers a unique glimpse into the architectural brilliance and cultural richness of Sindh, making it a must-visit destination for anyone interested in history, art, and heritage",
    image: "../images/Mohatta Palace Museum.jpg",
  },
  {
    id: "6",
    title: "Chaukhandi Tombs",
    description:
      "The Chaukhandi Tombs, located near Karachi, are an ancient graveyard renowned for their unique and elaborate sandstone carvings. These tombs are believed to date back to the 15th and 18th centuries, representing a significant period in the region's history. The tombs are adorned with intricate geometric patterns and motifs, reflecting the craftsmanship and artistic traditions of the time. The tombs are primarily associated with the Sindhi tribe Jokhio, but other tribes such as Burfat, Jakhra, and Shaikh are also represented.The architecture of the Chaukhandi Tombs is distinctive, featuring a north-south orientation with many of the tombs constructed from buff-colored sandstone that has withstood the test of time. The carvings include figural representations, such as mounted horsemen and hunting scenes, adding to the historical and cultural significance of the site. The tombs are built in a funerary architectural style typical of lower Sindh, showcasing the region's unique cultural heritage.As a cultural landmark, the Chaukhandi Tombs offer a fascinating glimpse into the region's past, providing valuable insights into the lives and traditions of the people who once inhabited the area. The site continues to be a source of inspiration and study for historians, archaeologists, and visitors alike, highlighting the enduring legacy of Sindh's rich cultural and architectural heritage.",

    image: "../images/Chaukhandi Tombs.jpg",
  },
  {
    id: "7",
    title: "Manchar Lake",
    description:
      "Manchar Lake, located in the Dadu District of Sindh, is Pakistan's largest natural freshwater lake. This expansive body of water receives its supply from numerous small streams originating in the Kirthar Mountains and eventually drains into the Indus River. The lake's surface area fluctuates significantly with the seasons, transforming its landscape and enhancing its ecological diversity. For the local fishing communities, Manchar Lake serves as a crucial source of livelihood. The abundant fish populations provide sustenance and income, supporting the economic stability of the surrounding villages. The lake's serene environment offers a peaceful retreat for visitors, with its tranquil waters and picturesque surroundings providing a perfect escape from urban life. The lake is also a vital habitat for a wide array of migratory birds. During the migratory season, birdwatchers can observe a plethora of species making their temporary home in the wetlands. This rich avian biodiversity adds to the lake's ecological importance and makes it a popular spot for nature enthusiasts. Beyond its natural beauty and ecological significance, Manchar Lake is steeped in history and culture. The surrounding area is dotted with ancient archaeological sites, such as Ghazi Shah, Wahi Pandhi, and Ali Murad Mound, which date back to the Harappan civilization. These sites offer a glimpse into the region's ancient past and highlight its historical importance. Despite its many attributes, Manchar Lake faces environmental challenges. The construction of the Main Nara Valley Drain altered the lake's ecosystem, leading to the inflow of sewage and a decline in water quality. Additionally, reduced water supplies from the Indus River and diminished storm runoff from the Kirthar Mountains have exacerbated these issues. Ongoing conservation efforts aim to address these challenges and preserve the lake's ecological balance. Manchar Lake remains a vital natural resource, supporting both the local community and wildlife. Its dynamic nature, rich history, and ecological significance make it a fascinating destination for visitors and researchers alike.",

    image: "../images/Manchar Lake.jpg",
  },
  {
    id: "8",
    title: "Sehwan Sharif",
    description:
      "Sehwan Sharif is a historic town in Sindh, Pakistan, known for its spiritual significance and cultural heritage. It is home to the shrine of Lal Shahbaz Qalandar, a revered Sufi saint from the 13th century. The shrine is a major spiritual center and attracts devotees from across Pakistan and beyond. During the annual Urs festival, Sehwan Sharif becomes a vibrant hub of activity as thousands of pilgrims gather to honor the saint. The festival is marked by colorful celebrations, music, and dance, creating an atmosphere of unity and devotion. The architecture of the shrine is striking, featuring a gilded dome, intricate tile work, and a grand entrance. Inside, the tomb of Lal Shahbaz Qalandar is surrounded by beautifully decorated walls with marble and mirror work, illuminated by oil lamps. Visitors to the shrine can experience the dhamaal, a meditative dance performed to the rhythm of drums, which is an integral part of the spiritual practice at the shrine. The combination of historical significance, architectural beauty, and spiritual ambiance makes Sehwan Sharif a unique and captivating destination. Sehwan Sharif's rich cultural heritage and the enduring legacy of Lal Shahbaz Qalandar continue to draw people from all walks of life. The shrine stands as a symbol of resilience and faith, fostering a sense of community and spiritual connection among its visitors. Overall, a visit to Sehwan Sharif offers an enriching experience, blending history, spirituality, and cultural vibrancy in a single, unforgettable journey.",
    image: "../images/Sehwan Sharif.jpg",
  },

  {
    id: "9",
    title: "Bhambore",
    description:
      "Bhambore, also known as Banbhore, is an ancient archaeological site located near Karachi in the Thatta District of Sindh, Pakistan. Believed to be the remnants of the ancient port city of Debal, Bhambore offers a captivating glimpse into the region's early history and trade connections. Excavations at the site have revealed a treasure trove of significant artifacts and structures, underscoring its importance as a major port throughout various historical periods. The site has uncovered evidence of distinct historical phases, including the Scytho-Parthian era, the Buddhist period, and the early Islamic period. Bhambore's strategic location on the northern bank of the Gharo Creek made it an ideal inland port, facilitating vibrant trade and cultural exchanges. Among the most notable discoveries is one of the earliest known mosques in the region, showcasing the site's Islamic heritage. Visitors to Bhambore can explore the well-preserved fortification walls, a mosque, administrative quarters, and an inn, all of which highlight the city's sophisticated urban planning and architectural prowess. The ruins provide valuable insights into the region's historical and cultural heritage, making Bhambore an essential destination for historians, archaeologists, and anyone interested in delving into Pakistan's rich past. Bhambore stands as a testament to the region's dynamic history and its role in the broader narrative of trade and cultural exchange in South Asia. Its enduring legacy continues to attract those seeking to understand the complexities and achievements of ancient civilizations in the region.",

    image: "../images/Bhambore.jpg",
  },
  {
    id: "10",
    title: "Kot Diji Fort",
    description:
      "Kot Diji Fort, situated near the town of Kot Diji in Khairpur District, Sindh, Pakistan, stands as a testament to the region's rich history and architectural ingenuity. Constructed by Mir Sohrab Khan Talpur of the Talpur dynasty, this impressive fortification was built in the 18th century. Perched on a strategic hilltop, the fort commands expansive views of the surrounding landscape, making it a formidable defensive structure. The architecture of Kot Diji Fort features massive stone walls, battlements, and numerous towers strategically positioned for optimal defense and surveillance. Within its walls, the fort contains a variety of structures, including a water reservoir, munition storage, prison, courtroom, and residential quarters for the security personnel. These features highlight the fort's role as a key military outpost and administrative center. Beyond its military significance, Kot Diji Fort is also located on an archaeological site with roots that trace back to the pre-Harappan civilization. This ancient site underscores the continuous human habitation and the area's historical importance, providing valuable insights into the early cultures that once thrived here. The fort played a crucial role in the region's defense before the British colonial period, serving as a guardian of the area. Its well-preserved state offers visitors a glimpse into the past, showcasing the architectural and strategic prowess of the Talpur dynasty. Today, Kot Diji Fort remains a symbol of Sindh's storied heritage, attracting historians, archaeologists, and tourists who seek to explore and appreciate its enduring legacy.",
    image: "../images/Kot Diji Fort.jpg",
  },
  {
    id: "11",
    title: "Hingol National Park",
    description:
      "Hingol National Park, located in Balochistan, Pakistan, is a breathtaking natural reserve that spans a vast area and is celebrated for its unique geological formations and diverse wildlife. The park is home to the iconic Princess of Hope, a naturally sculpted rock formation that resembles a robed woman looking out over the horizon. This intriguing landmark, along with other fascinating formations such as the Sphinx of Balochistan, draws visitors to explore the park's rugged terrain.The Hingol River, which flows through the park, enhances its scenic beauty and sustains a variety of ecosystems. The river's presence supports a rich array of flora and fauna, creating habitats for species such as the endangered Sindh ibex, Baluchistan urial, chinkara gazelles, and a multitude of bird species. The riverbanks and surrounding areas are lush with vegetation, providing a stark contrast to the arid landscapes typical of the region. Hingol National Park also boasts a rich cultural heritage, with ancient Hindu temples such as the Hinglaj Mata temple, which attracts pilgrims from across the country. The park's diverse landscapes, including coastal areas along the Arabian Sea, vast deserts, and verdant river valleys, offer a multitude of outdoor activities for nature enthusiasts. Visitors can engage in trekking, wildlife photography, and birdwatching, all while immersing themselves in the stunning natural beauty and tranquility of the park. Efforts to conserve Hingol National Park's unique biodiversity and geological wonders are ongoing, with initiatives aimed at protecting endangered species and preserving the area's natural heritage. The park stands as a testament to Pakistan's commitment to environmental conservation and its dedication to safeguarding the natural world for future generations. Hingol National Park is a natural treasure that captivates visitors with its spectacular landscapes, diverse wildlife, and rich cultural significance. Whether exploring its unique rock formations, observing its wildlife, or visiting its sacred sites, the park offers an unforgettable experience for all who venture into its remarkable expanse.",
    image: "../images/Hingol National Park.jpg",
  },
  {
    id: "12",
    title: "Shrine of Shah Abdul Latif Bhittai",
    description:
      "The Shrine of Shah Abdul Latif Bhittai, located in the town of Bhit Shah in Sindh, Pakistan, is a revered spiritual center dedicated to the famous Sufi poet and saint Shah Abdul Latif Bhittai. The shrine, an architectural marvel, is known for its intricate Sindhi-style tile work, featuring beautiful blue and white floral patterns that adorn its walls and domes. The main structure includes a mosque and a mausoleum, which open onto a large courtyard surrounded by domed arcades. Visitors to the shrine are drawn to its serene and spiritual atmosphere, seeking solace and inspiration from Shah Latif's poetry and teachings. The shrine's inner sanctum houses the tomb of the saint, which is enclosed by a carved wooden screen and lies under a beautifully painted fresco. The tomb is a focal point for devotees who come to pay their respects and seek blessings. The shrine complex also hosts nightly performances of Shah Latif's Surs, which are spiritual songs that resonate with the essence of his poetry. These performances, held after evening prayers, create a deeply moving and meditative experience for visitors. The shrine's annual Urs festival, commemorating the death anniversary of Shah Latif, attracts thousands of devotees who participate in vibrant celebrations, music, and dance. The Shrine of Shah Abdul Latif Bhittai is not only a place of worship but also a cultural and historical landmark that reflects the rich heritage of Sindh. It serves as a testament to the enduring legacy of Shah Latif's spiritual and literary contributions, making it a cherished destination for those seeking spiritual enlightenment and cultural enrichment.",
    image: "../images/SALB.jpg",
  },
];

interface PostProps {
  params: { id: string };
}
export default function Post({ params }: PostProps) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);
  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found </h2>
    );
  }
  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-blue-600 text-center">
        {" "}
        {post.title}{" "}
      </h1>{" "}
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}{" "}
      <div className="mt-6 text-lg text-slate-700">
        {" "}
        {renderParagraphs(post.description)}{" "}
      </div>{" "}
      <CommentSection postId={post.id} /> <AuthorCard />
      <Footer />
    </div>
  );
}
