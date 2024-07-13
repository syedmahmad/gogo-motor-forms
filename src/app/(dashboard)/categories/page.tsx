"use client"
import Columns from '@/components/categories/columns';
import { Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';

const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      typeName: "Category",
      name: "category1",
      nextToShow: 'sub-category',
      subCategories: [
          {
            typeName: "Sub-category",
            id: '1',
            categoryId: '1',
            name: "category1 (sub category)",
            nextToShow: 'questions',
            questions: [
              {   
                typeName: "questions",
                id: '1',
                subCategoryId: '1',
                name: "category1 (sub category 1) question 1",
                nextToShow: 'sub-questions',
                subQuestions: [
                  {
                      typeName: "Sub-questions",
                      id: '1',
                      questionID: '1',
                      name: 'questions 1 sub question 1'
                  },
                  {
                    typeName: "Sub-questions",
                    id: '2',
                    questionID: '1',
                    name: 'questions 1 sub question 2'
                },
              ]
            },            
          ]
        }
      ]
    },
  ]

  const [showSubCategories, setShowSubCategories] = useState(false);
  const [subCatergories, setSubCategories] = useState([]);

  const [showQuestions, setShowQuestions] = useState(false);
  const [question, setQuestion] = useState([]);

  const [showSubQuestions, setShowSubQuestions] = useState(false);
  const [subQuestion, setSubQuestion] = useState([]);

  const handleShowCategories = (item: any) => {
    setShowSubCategories(true);
    setSubCategories(item);
  }

  const handleShowQuestions = (item: any) => {
    setShowQuestions(true);
    setQuestion(item);
  }

  const handleShowSubQuestions = (item: any) => {
    setShowSubQuestions(true);
    setSubQuestion(item);
  }

  return(
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        overflowX: 'auto'
      }}
    >
      <Box maxWidth={270}>
        <Columns categoriesData={categoriesData} handleShowNextComponent={handleShowCategories} />
      </Box>
      {showSubCategories && <Box maxWidth={270}>
        <Columns categoriesData={subCatergories} handleShowNextComponent={handleShowQuestions} />
      </Box>
      }
      {showQuestions && <Box maxWidth={270}>
        <Columns categoriesData={question} handleShowNextComponent={handleShowSubQuestions} />
      </Box>
      }
      {showSubQuestions && <Box maxWidth={270}>
        <Columns categoriesData={subQuestion} />
      </Box>
      }
    </Box>
  )
}

export default Categories;