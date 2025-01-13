import React from "react";
import BlogCard from "./BlogCard";

export default function Maga() {
  const posts = [
    {
      id: "1",
      title: "Makli Necropolis",
      description:
        "Makli Necropolis is one of the world's largest cemetery sites, located in the Thatta region. It spans over 10 square kilometers and houses numerous tombs and graves of significant historical figures, dating back to the 14th century. The intricate architecture and carvings on the tombstones reflect the rich cultural heritage and artistic skills of the region.",
      date: "2024-09-18",
      image: "../images/Makli Necropolis.jpg",
    },
    {
      id: "2",
      title: "Ranikot Fort",
      description:
        "Ranikot Fort, often referred to as 'The Great Wall of Sindh,' is the largest fort in the world, with a circumference of approximately 32 kilometers. Located near Sann in the Jamshoro District, it offers panoramic views and a deep dive into Sindh's military history. The fort's massive walls and bastions are a sight to behold.",
      date: "2024-09-19",
      image: "../images/Ranikot Fort.jpg",
    },
    {
      id: "3",
      title: "Keenjhar Lake",
      description:
        "Keenjhar Lake, also known as Kalri Lake, is a large freshwater lake located in Thatta. It's a popular destination for picnickers, bird watchers, and nature enthusiasts. The lake is also linked to the folklore of Noori Jam Tamachi, a tale of love between a prince and a fisherwoman. Boating and fishing are common activities here.",
      date: "2024-09-23",
      image: "../images/Keenjhar Lake.jpg",
    },
    {
      id: "4",
      title: "Kirthar National Park",
      description:
        "Kirthar National Park is one of Pakistan's largest national parks, covering over 3,000 square kilometers. It is home to a variety of wildlife, including leopards, wild sheep, and numerous bird species. The park's rugged terrain and scenic landscapes make it a great spot for trekking and wildlife photography.",
      date: "2024-09-22",
      image: "../images/Kirthar National Park.jpg",
    },
    {
      id: "5",
      title: "Mohatta Palace Museum",
      description:
        "The Mohatta Palace Museum, located in Karachi, was built in 1927 and is a stunning example of Rajput architecture. The museum houses a rich collection of Sindh's cultural and artistic heritage, including traditional crafts, textiles, and historical artifacts. The beautifully restored palace and its gardens are a must-visit.",
      date: "2024-10-01",
      image: "../images/Mohatta Palace Museum.jpg",
    },
    {
      id: "6",
      title: "Chaukhandi Tombs",
      description:
        "The Chaukhandi Tombs are an ancient graveyard located near Karachi, known for their unique and elaborate sandstone carvings. These tombs date back to the 15th and 18th centuries and are adorned with intricate geometric patterns and motifs, reflecting the region's historical and architectural significance.",
      date: "2024-10-15",
      image: "../images/Chaukhandi Tombs.jpg",
    },
    {
      id: "7",
      title: "Manchar Lake",
      description:
        "Manchar Lake is the largest freshwater lake in Pakistan, situated in the Dadu District. The lake is a major source of livelihood for local fishermen and provides a serene environment for visitors. It is also an important habitat for migratory birds, making it a popular spot for birdwatching.",
      date: "2024-10-16",
      image: "../images/Manchar Lake.jpg",
    },
    {
      id: "8",
      title: "Sehwan Sharif",
      description:
        "Sehwan Sharif is a historic town known for the shrine of Lal Shahbaz Qalandar, a revered Sufi saint. The town comes alive during the annual Urs festival, attracting thousands of devotees from across the country. The shrine's beautiful architecture and spiritual atmosphere are truly captivating.",
      date: "2024-10-20",
      image: "../images/Sehwan Sharif.jpg",
    },
    {
      id: "9",
      title: "Bhambore",
      description:
        "Bhambore is an ancient archaeological site located near Karachi, believed to be the remnants of the ancient port city of Debal. Excavations have revealed significant artifacts and structures, offering insights into the region's early history and trade connections.",
      date: "2024-10-30",
      image: "../images/Bhambore.jpg",
    },
    {
      id: "10",
      title: "Kot Diji Fort",
      description:
        "Kot Diji Fort, located near the town of Kot Diji in Khairpur District, was built in the 18th century. The fort's impressive architecture includes massive stone walls, battlements, and a strategic hilltop location. It played a crucial role in the region's defense before the British colonial period.",
      date: "2024-10-01",
      image: "../images/Kot Diji Fort.jpg",
    },
    {
      id: "11",
      title: "Hingol National Park",
      description:
        "Hingol National Park, spanning over 6,100 square kilometers, is a stunning natural reserve featuring unique rock formations, such as the famous Princess of Hope, and diverse wildlife. The Hingol River flows through the park, adding to its scenic beauty and providing a habitat for various species.",
      date: "2024-12-27",
      image: "../images/Hingol National Park.jpg",
    },
    {
      id: "12",
      title: "Shrine of Shah Abdul Latif Bhittai",
      description:
        "The Shrine of Shah Abdul Latif Bhittai, located in Bhit Shah, is dedicated to the famous Sufi poet and saint. The shrine is an architectural marvel and a spiritual center, attracting visitors seeking solace and inspiration from Shah Latif's poetry and teachings.",
      date: "2025-01-10",
      image: "../images/SALB.jpg",
    },

  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-blue-900 animate-color-change">
        Sindh's Hidden Gems: A Journey Through Its Historic Heart
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
