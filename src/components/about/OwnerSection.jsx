import owner from "../../assets/owner/owner.jpeg"

export default function OwnerSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

        {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={owner}
              alt="Owner of Pal Group"
              className="object-cover "
            />
          </div>

          {/* CONTENT */}
        <div>
          <h2 className="text-xl text-green-800 mb-8">
            The Owner Of Pal Group
          </h2>

          <div className="text-sm text-gray-600 leading-relaxed space-y-6">
            <p>
              A visionary and a self-created man, Shri Suresh Pal, is the owner
              of pal group – what we today know as the Pal Group. His
              enterprising outlook, farsightedness, discovery opportunities,
              hard work, sincerity, and effort, led him to his accomplishments
              and reach greater heights. In no time, the company achieved the
              milestone of supplying stones and grits to the Indian Railway,
              NHAI, and many more large companies.
            </p>

            <p>
              This marked the beginning of the diversification of the company
              which was soon to be established as an empire – Pal Group – a
              vision that was always etched in the mind of the owner of pal
              group, since its time of inception.
            </p>

            <p>
              After bagging numerous milestones, one after another, Mr. Suresh
              Pal continued to seek lucrative business opportunities and soon
              set his foot into the building and developing Pal Colonizers to
              deliver organized living, meeting the needs of the upcoming
              modern generation in Haldwani City, Uttarakhand.
            </p>

            <p>
              In 2013, Pal Group noticed a mass market in frozen foods and
              introduced themselves as one of the leading processors of frozen
              vegetables under the name of Pal Frozen Foods with the brand name
              Pal Fresh, now present all across India.
            </p>

            <p>
              Mr. Pal’s vision and efforts, combined with his team’s dedication
              bring Pal Group where it stands today – an empire that has won
              accolades, awards, and certifications across the nation for
              client satisfaction and on-time quality delivery of services.
              With massive historical progress and a futuristic vision, Pal
              Group will continue to grow and develop in its endeavors in the
              coming years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
