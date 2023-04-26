import { useState, useEffect, createContext } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Alert } from "react-native";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [itemList, setItemList] = useState([]);
  const [itemEdit, setItemEdit] = useState({
    item: {},
    edit: false,
  });

  // get items
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemListRef = collection(db, "itemList");
        const q = query(itemListRef, orderBy("title"), limit(10));
        const querySnapShot = await getDocs(q);
        const itemList = querySnapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setItemList(itemList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItem();
  }, []);

  //   Add Item
  const addItem = (newItem) => {
    try {
      const docRef = addDoc(collection(db, "itemList"), newItem);
      console.log("Document written: ", docRef.id);
      setItemList((preItemList) => [
        ...preItemList,
        { id: docRef.id, data: newItem },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  //   delet Item
  const deleteItem = (id) => {
    Alert.alert(
      "Delete Item",
      "Are you sure you want to delete?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            try {
              const docRef = doc(db, "itemList", id);
              deleteDoc(docRef);
              setItemList((preItemList) =>
                preItemList.filter((item) => item.id !== id)
              );
            } catch (err) {
              console.log(err);
            }
          },
        },
      ],
    );
  };

  //Edit Item
  const editItem = (item) => {
    console.log(item);
    setItemEdit({ item, edit: true });
  };

  // Update Item
  const updateItem = async (id, updItem) => {

    try {
      const docRef = doc(db, "itemList", id);
      await updateDoc(docRef, updItem);
      const updatedItemList = itemList.map((item) => {
        if (item.id === id) {
          return {
            id,
            data: {
              ...item.data,
              ...updItem,
            },
          };
        } else {
          return item;
        }
      });
      setItemList(updatedItemList);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TaskContext.Provider
      value={{ itemList, addItem, editItem, updateItem, deleteItem, itemEdit }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;