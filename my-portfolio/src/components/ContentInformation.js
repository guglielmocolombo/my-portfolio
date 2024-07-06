import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './ContentInformation.css'; // Custom CSS for additional styling

const ContentInformation = ({ inputFile }) => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch(inputFile);
        if (response.ok) {
          const text = await response.text();
          setFileContent(text);
        } else {
          console.error('Failed to fetch file:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching file:', error);
      }
    };

    fetchFileContent();
  }, [inputFile]);

  return (
    <Container className="content-information">
      <pre>{fileContent}</pre>
    </Container>
  );
};

export default ContentInformation;
