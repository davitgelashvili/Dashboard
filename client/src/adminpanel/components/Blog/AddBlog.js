import React, { useEffect, useState } from 'react';
import CustomEditor from '../CustomEditor/CustomEditor';
import Content from '../Content/Content';
import Language from '../Content/Language';
import CustomInput from '../CustomInput/CustomInput';
import UploadWidget from '../UploadWidget/UploadWidget';
import getApi from '../../../http/getApi';
import { useParams } from 'react-router';

export default function AddBlog() {
  const [language, setLanguage] = useState('ka')
  const { id } = useParams()
  console.log(id)
  const [data, setData] = useState({
    title: {
      en: '',
      ka: '',
    },
    body: {
      en: '',
      ka: '',
    },
    cover: '',
  });

  useEffect(() => {
    async function fetchBlog() {
      if (!id) return;
      try {
        const blog = await getApi.getData(`/blogs/${id}`);
        setData(blog);
      } catch (err) {
        console.error('Failed to load blog', err);
      }
    }
    fetchBlog();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'ka' || name === 'en') {
      setData((prev) => ({
        ...prev,
        title: {
          ...prev.title,
          [name]: value,
        },
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleEditorChange = (section, name, value) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  const submit = async () => {
    try {
      if (id) {
        // ედიტირება
        await getApi.putData(`/blogs/${id}`, data);
        alert('ბლოგი წარმატებით განახლდა');
      } else {
        // დამატება
        await getApi.postData('/blogs', data);
        alert('ბლოგი წარმატებით დაემატა');
      }
    } catch (error) {
      alert('დაფიქსირდა შეცდომა');
      console.error(error);
    }
  };

  return (
    <Content title="ბლოგის დამატება" language={language} setLanguage={setLanguage}>
      <UploadWidget
        title="მთავარი ფოტო"
        setData={setData}
        value={data.cover}
      />
      <Language lang={language}>
        <CustomInput
          title="სათაური"
          type="text"
          value={data.title[language]}
          name={language}
          placeholder="enter text"
          onChange={handleInputChange}
        />
        <CustomEditor
          section="body"
          name={language}
          value={data.body[language]}
          onChange={handleEditorChange}
          title="აღწერა"
        />
        <button onClick={submit}>დამატება</button>
      </Language>
    </Content>
  );
}
