import React from 'react'

function Team() {
  return (
    <section className="pt-24 pb-24 bg-gray-200">
      <div className="px-4 mx-auto max-w-4xl bg-white rounded-xl shadow-lg md:px-12">
        <div className="w-full mx-auto text-center">
          <div class="pt-10 mb-16 text-center">
            <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Tailus blocks leadership</h2>
            <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p>
          </div>
          <div class="pb-10 grid gap-12 items-center md:grid-cols-3">
            <div class="space-y-4 text-center">
              <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="woman" loading="lazy" width="640" height="805" />
              <div>
                <h4 class="text-2xl">Hentoni Doe</h4>
                <span class="block text-sm text-gray-500">CEO-Founder</span>
              </div>
            </div>
            <div class="space-y-4 text-center">
              <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="man" loading="lazy" width="1000" height="667" />
              <div>
                <h4 class="text-2xl">Jonathan Doe</h4>
                <span class="block text-sm text-gray-500">Chief Technical Officer</span>
              </div>
            </div>
            <div class="space-y-4 text-center">
              <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg" alt="woman" loading="lazy" width="1000" height="667" />
              <div>
                <h4 class="text-2xl">Anabelle Doe</h4>
                <span class="block text-sm text-gray-500">Chief Operations Officer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team