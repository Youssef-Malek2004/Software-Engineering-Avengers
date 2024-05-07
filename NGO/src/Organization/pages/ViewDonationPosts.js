import React, { useState } from "react";

const DonationPosts = () => {
  const [donationPosts, setDonationPosts] = useState([
    { id: 1, title: "Book Drive", category: "Education", lastUpdated: "2024-05-12", status: "not fulfilled" },
    { id: 2, title: "Toy Collection", category: "Toys", lastUpdated: "2024-05-10", status: "fulfilled" },
    { id: 3, title: "School Supplies Donation", category: "School Supplies", lastUpdated: "2024-05-08", status: "not fulfilled" },
    { id: 4, title: "Clothes Drive", category: "Clothes", lastUpdated: "2024-05-05", status: "fulfilled" },
    { id: 5, title: "Toy Donation", category: "Toys", lastUpdated: "2024-05-02", status: "not fulfilled" },
    { id: 6, title: "Food Drive", category: "Food", lastUpdated: "2024-04-30", status: "fulfilled" },
    { id: 7, title: "Stationery Drive", category: "Stationery", lastUpdated: "2024-04-28", status: "not fulfilled" },
    { id: 8, title: "Shelter Supplies Donation", category: "Shelter Supplies", lastUpdated: "2024-04-25", status: "fulfilled" },
    { id: 9, title: "Art Supplies Donation", category: "Art Supplies", lastUpdated: "2024-04-22", status: "not fulfilled" },
    { id: 10, title: "Sports Equipment Donation", category: "Sports Equipment", lastUpdated: "2024-04-20", status: "fulfilled" }
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ category: '', status: '' });
  const [editedPost, setEditedPost] = useState(null);

  const filteredPosts = donationPosts.filter(post => {
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = filters.category === '' || post.category === filters.category;
    const matchStatus = filters.status === '' || post.status === filters.status;
    return matchSearch && matchCategory && matchStatus;
  });

  const handleEdit = (id) => {
    const postToEdit = donationPosts.find(post => post.id === id);
    setEditedPost(postToEdit);
  };

  const handleUpdate = () => {
    const updatedPosts = donationPosts.map(post => {
      if (post.id === editedPost.id) {
        return editedPost;
      }
      return post;
    });
    setDonationPosts(updatedPosts);
    setEditedPost(null);
  };

  const handleDelete = (id) => {
    const updatedPosts = donationPosts.filter(post => post.id !== id);
    setDonationPosts(updatedPosts);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">View Donation Posts</h1>
      {/* Search field */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by title..."
        className="border rounded px-2 py-1 mb-4 block mx-auto"
        style={{ maxWidth: '300px' }}
      />
      {/* Filter fields */}
      <div className="flex justify-center mb-4">
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="border rounded px-2 py-1 mr-4"
        >
          <option value="">All Categories</option>
          <option value="Education">Education</option>
          <option value="Toys">Toys</option>
          <option value="Clothes">Clothes</option>
          {/* Add more options as needed */}
        </select>
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="border rounded px-2 py-1 mr-4"
        >
          <option value="">Status</option>
          <option value="fulfilled">Fulfilled</option>
          <option value="not fulfilled">Not Fulfilled</option>
          {/* Add more options as needed */}
        </select>
      </div>
      {/* Donation posts table */}
      <table className="min-w-full border-collapse border border-purple-600">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-purple-600">ID</th>
            <th className="px-4 py-2 border border-purple-600">Title</th>
            <th className="px-4 py-2 border border-purple-600">Category</th>
            <th className="px-4 py-2 border border-purple-600">Last Updated</th>
            <th className="px-4 py-2 border border-purple-600">Status</th>
            <th className="px-4 py-2 border border-purple-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map(post => (
            <tr key={post.id}>
              <td className="border border-purple-600 px-4 py-2">{post.id}</td>
              <td className="border border-purple-600 px-4 py-2">{post.title}</td>
              <td className="border border-purple-600 px-4 py-2">{post.category}</td>
              <td className="border border-purple-600 px-4 py-2">{post.lastUpdated}</td>
              <td className="border border-purple-600 px-4 py-2">{post.status}</td>
              <td className="border border-purple-600 px-4 py-2 flex justify-between">
                <button onClick={() => handleEdit(post.id)} className="text-blue-600 mr-2">Edit</button>
                <button onClick={() => handleDelete(post.id)} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Edit modal */}
      {editedPost && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg relative w-96">
            <button className="absolute top-2 right-2 text-gray-600" onClick={() => setEditedPost(null)}>Close</button>
            <input
              type="text"
              value={editedPost.title}
              onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
              className="border rounded py-1 px-2 mb-4 w-full"
              placeholder="Title"
            />
            <input
              type="text"
              value={editedPost.category}
              onChange={(e) => setEditedPost({ ...editedPost, category: e.target.value })}
              className="border rounded py-1 px-2 mb-4 w-full"
              placeholder="Category"
            />
            <textarea
              value={editedPost.additionalDetails}
              onChange={(e) => setEditedPost({ ...editedPost, additionalDetails: e.target.value })}
              className="border rounded py-1 px-2 mb-4 w-full h-24 resize-none"
              placeholder="Additional Details"
            ></textarea>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md w-full" onClick={handleUpdate}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationPosts;
