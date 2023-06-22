import React from 'react'
import './Home.css'

const Home = () => {
  return (


    <>
      <div className='heroContainer'>

        <div id="page">



          <div className="width25 floatLeft leftColumn">

            <h1>Intro</h1>

            <ul className="sideMenu">
              <li className="here">
                Dynamic Template
                <ul>
                  <li><a href="#fluidity" title="Jump to section">Book of Fluidity</a></li>
                  <li><a href="#coding" title="Jump to section">Coding</a></li>
                </ul>
              </li>
              <li><a href="http://fullahead.org" title="Goto Fullahead">Fullahead</a></li>
              <li><a href="http://threetree.net" title="Goto Threetree">ThreeTree</a></li>
            </ul>

            <p>
              This sidebar can be used to jump to sections within the page, or other sub pages of the active tab.
            </p>

            <p>
              Using this approach, you shouldn't need breadcrumbs since you've provided your visitor with a <b>visual cue</b> to where they are in the site.
            </p>

            <p>
              To <b>learn more</b> about how to use this template, follow the <a href="help.html" title="View help">help</a> link.  You can also see the styled <a href="tags.html" title="View tags">tags</a> and the <a href="print.html" title="View print layout">print</a> layout.
            </p>

          </div>





          <div className="width75 floatRight">


            <div className="gradient">

              <a name="fluidity"></a>

              <h1 style={{marginTop:0}} >Dynamic Template</h1>
              <h2>Taken from the book of <a href="http://openwebdesign.org/viewdesign.phtml?id=2514" title="View template">fluidity</a>, this template is exceptionally easy to customize using re-useable CSS classNamees.</h2>

              <p>
                This template quickly and easily allows for one, two, three or even four column layouts.  This is done with simple <acronym title="Cascading Style Sheet">CSS</acronym> classNamees that can be used over and over again.  To learn more about it, follow <a href="help.html" title="View help">this link</a>.  The template itself is valid <acronym title="eXtensible Hypertext Markup Language">XTHML</acronym> 1.0 strict and <i>almost</i> valid CSS.  The almost is added in there because CSS expressions were used.  You can read more about that <a href="#expressions" title="Read about CSS expressions">here</a>.
              </p>

              <blockquote className="go">
                <p>
                  This template doesn't use fixed columns.  With a few simple CSS classNamees you can quickly change the appearance.  <a href="help.html" title="View help">Click here</a> to learn how.
                </p>
              </blockquote>

              <p>
                Since this template is fluid width and the font sizes are defined relatively, you can <b>change font size without breaking the layout</b>.  The fluid width also means that people with higher resolutions aren't constrained.
              </p>

              <p>
                Total size of the images used is just under 25 <acronym title="kilobytes">kb</acronym>, so that's good news to all the dial-up users.  The code behind the template is semantically written which means that it is widely supported.  As for the browsers, it displays consistently in the usual suspects:
              </p>


              <ul>
                <li><b>Firefox</b> of course</li>
                <li><b>Opera</b> sure, why not</li>
                <li><b>Netscape</b> like firefox's less attractive cousin at the dance</li>
                <li><b>Internet Explorer</b> ...</li>
 
              </ul>

            </div>





        

          </div>

        </div>


        {/* <div className="leftColumn">

          <p>


            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod ad tenetur quia numquam, possimus dolorem. Placeat deleniti nesciunt ducimus omnis alias est. Sed adipisci hic natus tenetur sapiente dolore!
          </p>
          <p>


            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod ad tenetur quia numquam, possimus dolorem. Placeat deleniti nesciunt ducimus omnis alias est. Sed adipisci hic natus tenetur sapiente dolore!
          </p>
        </div> */}

        {/* <div className="rightColumn">


          <p>


            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod ad tenetur quia numquam, possimus dolorem. Placeat deleniti nesciunt ducimus omnis alias est. Sed adipisci hic natus tenetur sapiente dolore!
          </p>
          <p>


            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod ad tenetur quia numquam, possimus dolorem. Placeat deleniti nesciunt ducimus omnis alias est. Sed adipisci hic natus tenetur sapiente dolore!
          </p>          <p>


            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod ad tenetur quia numquam, possimus dolorem. Placeat deleniti nesciunt ducimus omnis alias est. Sed adipisci hic natus tenetur sapiente dolore!
          </p>
          <p>


            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod ad tenetur quia numquam, possimus dolorem. Placeat deleniti nesciunt ducimus omnis alias est. Sed adipisci hic natus tenetur sapiente dolore!
          </p>
          <p>


            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod ad tenetur quia numquam, possimus dolorem. Placeat deleniti nesciunt ducimus omnis alias est. Sed adipisci hic natus tenetur sapiente dolore!
          </p>
          <p>


            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod ad tenetur quia numquam, possimus dolorem. Placeat deleniti nesciunt ducimus omnis alias est. Sed adipisci hic natus tenetur sapiente dolore!
          </p>
        </div> */}


      </div>
    </>

  )
}

export default Home