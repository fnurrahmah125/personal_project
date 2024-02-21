import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBooksFromFirestore } from "../store/slices/bookSlice";
import { GoClock } from "react-icons/go";
import Navbar from "../components/Navbar";

const Profile = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.value);
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooksFromFirestore(auth.uid));
  }, [auth, dispatch]);

  return (
    <>
      <Navbar />
      <div className="bg-slate-200 px-4 pt-4 text-slate-800 sm:px-8">
        <div className="m-auto min-h-screen w-full max-w-[90rem] rounded-tl-md rounded-tr-md bg-white p-4 pt-6  shadow-md md:p-6">
          <div className="mb-12 text-center">
            <img
              src="../profile.jpg"
              alt="profile image"
              className="mx-auto mb-2 w-32 rounded-full border border-slate-500"
            />
            <p className="mb-1 text-2xl font-medium">Hi, {auth.displayName}!</p>
            <p className="font-light text-slate-500">{auth.email}</p>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-lg font-bold">Current Readings</h2>
            {books.map((book) => {
              if (!book.isFinished) {
                const date = new Date(book.startDate.seconds * 1000);
                const options = {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                };
                const width = Math.round(
                  (book.currentPages / book.totalPages) * 100,
                );

                return (
                  <div
                    key={book.id}
                    className="card mb-4 rounded-md bg-slate-50 p-4 md:grid md:grid-cols-6"
                  >
                    <div className="mb-4 grid grid-cols-5 items-center gap-4 md:col-start-1 md:col-end-3 md:gap-12 lg:grid-cols-8">
                      <div className="card-title-custom h-10 w-10 rounded-full text-center text-2xl font-semibold leading-10">
                        {book.title[0]}
                      </div>
                      <div className="col-span-4 col-end-6 lg:col-span-6 lg:col-end-8">
                        <h3 className="tex-lg mb-1 line-clamp-2 font-bold md:mb-2 md:line-clamp-1 ">
                          {book.title}
                        </h3>
                        <p className="text-sm font-light text-slate-400">
                          <GoClock className="mr-1 inline-block" />
                          {date.toLocaleDateString("id-ID", options)}
                        </p>
                      </div>
                    </div>

                    <div className="md:col-start-4 md:col-end-7 lg:col-start-5">
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm text-slate-400">
                          progress ({book.currentPages}/{book.totalPages})
                        </span>
                        <span className="text-xl font-bold">{width}%</span>
                      </div>
                      <div className="w-full rounded-full bg-slate-200">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-green-500 to-green-300"
                          style={{ width: `${width}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
