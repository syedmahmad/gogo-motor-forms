"use client"
import Columns from '@/components/categories/columns';
import QuestionTypes from '@/components/categories/Questiontype';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { dispatch, useSelector } from '@/store';
import { fetchCategories } from '@/store/reducers/categories';

const Categories = () => {
  // reading data from store.
  const { categories, loading } = useSelector((state) => state.categories);

  // will load categories form backend.
  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, []);

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
                nextToShow: 'questionType',
                questionType: 'dropdown',
                questionValue: [
                            {
                                name: "Value 1",
                                nextToShow: 'sub-questions',
                                subQuestions: {
                                    name: "Sub Question 1",
                                    typeName: "Sub-questions",
                                    subQuestionType: "Radio",
                                    subQuestionValue: ["Sub Value 1", "Sub Value 2"]
                                }
                            },
                            {
                              name: "Value 2",
                              nextToShow: 'sub-questions',
                              subQuestions: {
                                  name: "Sub Question 2",
                                  typeName: "Sub-questions",
                                  subQuestionType: "checkbox",
                                  subQuestionValue: ["Sub Value 3", "Sub Value 4"]
                              }
                            },
                            {
                              name: "Value 3",
                              nextToShow: 'sub-questions',
                              subQuestions: {
                                  name: "Sub Question 3",
                                  typeName: "Sub-questions",
                                  subQuestionType: "text",
                                  subQuestionValue: ""
                              }
                            }
                        ],
                      score: 7
            },            
          ]
        }
      ]
    },
    {
      id: 1,
      typeName: "Category",
      name: "category2",
      nextToShow: 'sub-category',
      subCategories: [
          {
            typeName: "Sub-category",
            id: '1',
            categoryId: '1',
            name: "category2 (sub-cat 1)",
            nextToShow: 'questions',
            questions: [
              {   
                typeName: "questions",
                id: '1',
                subCategoryId: '1',
                name: "category2 (sub category 2) question 1",
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
        },
        {
          typeName: "Sub-category",
          id: '2',
          categoryId: '2',
          name: "category2 (sub-cat 2)",
          nextToShow: 'questions',
          questions: [
            {   
              typeName: "questions",
              id: '2',
              subCategoryId: '2',
              name: "category2 (sub category 2) question 1",
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

  const [showQuestionsType, setShowQuestionsType] = useState(false);
  const [questionType, setQuestionType] = useState('');
  const [questionScore, setQuestionScore] = useState(0);
  const [questionValues, setQuestionValues] = useState([]);

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

  const handleShowQuestionsType = (item: any, questionType: string, score: any) => {
    setShowQuestionsType(true);
    setQuestionType(questionType);
    setQuestionValues(item);
    setQuestionScore(score);
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
        <Columns categoriesData={question} handleShowNextComponent={handleShowQuestionsType} />
      </Box>
      }
      {showQuestionsType && <Box maxWidth={270}>
        <QuestionTypes questionType={questionType} 
          questionValues={questionValues} 
          questionScore={questionScore}
          handleShowSubQuestions={handleShowSubQuestions} />
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