"use client"
import Columns from '@/components/categories/columns';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { dispatch, useSelector } from '@/store';
import Categories, { fetchCategories } from '@/store/reducers/categories';
import CategoriesData from '@/components/categories/CategoriesData';
import SubCategoriesData from '@/components/categories/SubCategoriesData';
import QuestionsData from '@/components/categories/QuestionsData';
import QuestionDataTypes from '@/components/categories/QuestionDataTypes';
import SubQuestionData from '@/components/categories/SubQuestionsData';
import SubQuestionDataTypes from '@/components/categories/SubQuestionDataTypes';

const CategoriesPage = () => {
  // reading data from store.
  const { categories, loading } = useSelector((state) => state.categories);

  // will load categories form backend.
  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, []);

  const categoriesData = [
    {
        "Category": "Body Exterior",
        "Subcategories": [
            {
                "Subcategory": "Exterior Mounted Spare Tyre",
                "Questions": [
                    {
                        "Question": "Spare Wheel Cover - Missing",
                        "Question Type": "Text",
                        "Question Value": "",
                        "Sub Questions": [],
                        "Score": 6
                    },
                    {
                        "Question": "Spare Wheel Cover - Damaged",
                        "Question Type": "DropDown",
                        "Question Value": [
                            {
                                "Value": "Value 1",
                                "Sub Question": {
                                    "Sub Question": "Sub Question 1",
                                    "Sub Question Type": "Radio",
                                    "Sub Question Value": ["Sub Value 1", "Sub Value 2"]
                                }
                            },
                            {
                                "Value": "Value 2",
                                "Sub Question": {
                                    "Sub Question": "Sub Question 2",
                                    "Sub Question Type": "Check Box",
                                    "Sub Question Value": ["Sub Value 3", "Sub Value 4"]
                                }
                            },
                            {
                                "Value": "Value 3",
                                "Sub Question": {
                                    "Sub Question": "Sub Question 3",
                                    "Sub Question Type": "Text",
                                    "Sub Question Value": ""
                                }
                            }
                        ],
                        "Score": 7
                    },
                    {
                        "Question": "Spare Wheel Cover - Faded",
                        "Question Type": "Radio",
                        "Question Value": ["Value 1", "Value 2", "Value 3"],
                        "Sub Questions": [],
                        "Score": 8
                    },
                    {
                        "Question": "Spare Wheel Cover - Torn",
                        "Question Type": "Check Box",
                        "Question Value": ["Value 1", "Value 2", "Value 3"],
                        "Sub Questions": [],
                        "Score": 7
                    },
                    {
                        "Question": "Tyre Missing",
                        "Question Type": "Image",
                        "Question Value": "",
                        "Sub Questions": [],
                        "Score": 7
                    }
                ]
            },
            {
                "Subcategory": "Soft Top Convertible",
                "Questions": [
                    {
                        "Question": "Fabric - Damaged",
                        "Question Type": "Document",
                        "Question Value": "",
                        "Sub Questions": [],
                        "Score": 7
                    },
                    {
                        "Question": "Fabric - Torn",
                        "Question Type": "Text",
                        "Question Value": "",
                        "Sub Questions": [],
                        "Score": 7
                    },
                    {
                        "Question": "Fabric - Faded",
                        "Question Type": "Text",
                        "Question Value": "",
                        "Sub Questions": [],
                        "Score": 8
                    },
                    {
                        "Question": "Mechanism - Not Working",
                        "Question Type": "Text",
                        "Question Value": "",
                        "Sub Questions": [],
                        "Score": 5
                    },
                    {
                        "Question": "Mechanism - Noise",
                        "Question Type": "Text",
                        "Question Value": "",
                        "Sub Questions": [],
                        "Score": 6
                    },
                    {
                        "Question": "Mechanism - Slow Speed",
                        "Question Type": "Text",
                        "Question Value": "",
                        "Sub Questions": [],
                        "Score": 7
                    }
                ]
            },
            {
                "Subcategory": "Door Locks",
                "Questions": [
                    {
                        "Question": "Broken",
                        "Question Type": "Text",
                        "Question Value": "",
                        "Sub Questions": [],
                        "Score": 10
                    },
                    {
                        "Question": "Blocked",
                        "Question Type": "Text",
                        "Question Value": "",
                        "Sub Questions": [],
                        "Score": 9
                    },
                    {
                        "Question": "Jammed",
                        "Question Type": "Text",
                        "Question Value": "",
                        "Sub Questions": [],
                        "Score": 8
                    }
                ]
            }
        ]
    }
  ]

  const [showSubCategories, setShowSubCategories] = useState(false);
  const [subCatergoriesData, setSubCategoriesData] = useState([]);
  const categoryClickHandler = (item: any) => {
    setShowSubCategories(true);
    setSubCategoriesData(item);
  }

  const [showQuestions, setShowQuestions] = useState(false);
  const [questionsData, setQuestionsData] = useState([]);
  const subCategoryClickHandler = (item: any) => {
    setShowQuestions(true);
    setQuestionsData(item);
  }

  const [showQuestionType, setShowQuestionType] = useState(false);
  const [questionDataTypeData, setQuestionDataTypeData] = useState([]);
  const questionClickHandler = (item: any) => {
    setShowQuestionType(true);
    setQuestionDataTypeData(item);
    setShowSubQuestions(false);
    setShowSubQuestionsDataTypes(false);
  }

  const [showSubQuestions, setShowSubQuestions] = useState(false);
  const [subQuestionsData, setSubQuestionsData] = useState([]);
  const questionTypeClickHandler = (item: any) => {
    if (item !== null && typeof item === 'object') {
      setShowSubQuestions(true);
      setSubQuestionsData(item);
    }
    setShowSubQuestionsDataTypes(false);
  }

  const [showSubQuestionsDataTypes, setShowSubQuestionsDataTypes] = useState(false);
  const [subQuestionsDataTypes, setSubQuestionsDataTypes] = useState([]);
  const subQuestionTypeClickHandler = (item: any) => {
    setShowSubQuestionsDataTypes(true);
    setSubQuestionsDataTypes(item);
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
        <CategoriesData data={categoriesData} categoryClickHandler={categoryClickHandler} />
      </Box>

      { showSubCategories && <Box maxWidth={270}>
          <SubCategoriesData data={subCatergoriesData} subCategoryClickHandler={subCategoryClickHandler} />
        </Box>
      }

      { showQuestions && <Box maxWidth={270}>
          <QuestionsData data={questionsData} questionClickHandler={questionClickHandler} />
        </Box>
      }
      { showQuestionType && <Box maxWidth={270}>
          <QuestionDataTypes data={questionDataTypeData} questionTypeClickHandler={questionTypeClickHandler} />
        </Box>
      }

      { showSubQuestions && <Box maxWidth={270}>
          <SubQuestionData data={subQuestionsData} subQuestionTypeClickHandler={subQuestionTypeClickHandler} />
        </Box>
      }

      { showSubQuestionsDataTypes && <Box maxWidth={270}>
          <SubQuestionDataTypes data={subQuestionsDataTypes} />
        </Box>
      }
    </Box>
  )
}

export default CategoriesPage;