import React from 'react';

const Contact = () => {
  const iframeSrc = 'https://hello.withmoxie.com/01/austin-morrow1/discovery-form---old-website?inFrame=true&sourceUrl=' + encodeURIComponent(window.location.href);

  return (
    <div name='contact' className='w-full pt-12 bg-gray-200 p-4'>
      <div className='text-center'>
        <div className='inline-block border-b-4 border-amber-400'>
          <p className='text-4xl font-bold text-black'>CONTACT</p>
        </div>
        <p className='text-black py-4'>Submit the form below or send me an email - austinmorrowdev@gmail.com</p>
      </div>

      <div className="flex justify-center">
        <div style={{ width: '100%', height: '500px', maxWidth: '100vw', overflow: 'hidden' }}>
          <iframe
            title="contact"
            id="hectic-form"
            allowTransparency="true"
            style={{ padding: '0px', margin: '0px', border: '0', width: '100%', height: '100%' }}
            src={iframeSrc}
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
