import Nav from "../../components/nav/nav";
import NavMobile from "../../components/navMobile/navMobile";
import Footer from "../../components/footer/footer";
import { useState } from "react";
import './download.css'

const Download = () => {
    const [isNavActive, setIsNavActive] = useState(false)
        
    const toggleNav = () => {
        setIsNavActive((prev) => !prev)
    }

      const [currentPage, setCurrentPage] = useState(1);
  const documentsPerPage = 5;

  // Mock data for downloadable documents
  const documents = [
    {
      id: 1,
      name: 'Mike jane Montesorri',
      type: 'application/pdf',
      size: '157.43kb',
      icon: 'pdf-icon.png'
    },
    {
      id: 2,
      name: 'Mike jane Model Christian College',
      type: 'application/pdf',
      size: '203.21kb',
      icon: 'pdf-icon.png'
    },
    {
      id: 3,
      name: 'Prospectus',
      type: 'application/pdf',
      size: '286.31kb',
      icon: 'pdf-icon.png'
    },
    {
      id: 4,
      name: 'Application Form',
      type: 'application/pdf',
      size: '124.5kb',
      icon: 'pdf-icon.png'
    },
    {
      id: 5,
      name: 'Tuition Breakdown',
      type: 'application/pdf',
      size: '98.7kb',
      icon: 'pdf-icon.png'
    },
    {
      id: 6,
      name: 'Rules & Regulations',
      type: 'application/pdf',
      size: '175.2kb',
      icon: 'pdf-icon.png'
    },
    {
      id: 7,
      name: 'School Journal',
      type: 'application/pdf',
      size: '320.45kb',
      icon: 'pdf-icon.png'
    }
  ];

  // Get current documents
  const indexOfLastDocument = currentPage * documentsPerPage;
  const indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
  const currentDocuments = documents.slice(indexOfFirstDocument, indexOfLastDocument);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <>
       {isNavActive? (<NavMobile toggleNav={toggleNav} isNavActive={isNavActive}/>) : ""}
       <Nav toggleNav={toggleNav}/>
       <div className="download-center">
      <div className="download-header">
        <h2>DOWNLOAD CENTER</h2>
        <div className="download-description">
          <p>DOWNLOAD VARIOUS DOCUMENTS/RESOURCES (ACADEMIC & NON-ACADEMIC DOCUMENTS) HERE. DOWNLOAD INCLUDES: APPLICATION FORMS, JOURNALS, TUITION BREAKDOWN, PROSPECTUS, RULES & REGULATIONS AND LOTS MORE.</p>
        </div>
      </div>

      <div className="download-area">
        <h3>The following files are available for download [DOCUMENT DOWNLOAD AREA].</h3>
        <p className="reader-note">
          You need to have both <strong>Word Reader</strong> and <strong>PDF Reader</strong> installed on this system to be able to read the downloaded document, if you don't have an <strong>PDF Reader</strong> then you can download it from <a href="#" className="download-link">here</a>.
        </p>
        <p className="note"><strong>Note:</strong> It is strongly advised you get the latest version of the above stated Readers</p>

        <div className="download-table-container">
          <table className="download-table">
            <thead>
              <tr>
                <th>DOWNLOAD</th>
                <th>DOCUMENT</th>
                <th>FILE TYPE</th>
                <th>FILESIZE</th>
              </tr>
            </thead>
            <tbody>
              {currentDocuments.map(doc => (
                <tr key={doc.id}>
                  <td className="download-icon">
                    <a href="#" aria-label={`Download ${doc.name}`}>
                      <div className="pdf-icon"></div>
                    </a>
                  </td>
                  <td>{doc.name}</td>
                  <td>{doc.type}</td>
                  <td>{doc.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          {Array.from({ length: Math.ceil(documents.length / documentsPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
       <Footer />
        </>
    )
}

export default Download