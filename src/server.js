const { Sequelize, DataTypes } = require('sequelize');

// Khởi tạo kết nối tới cơ sở dữ liệu
const sequelize = new Sequelize('DBBookingCare', 'root', '12345', {
    host: 'vinc02bookingcare.click',
    port: 3307,
    dialect: 'mysql',
    logging: false // Thay đổi dialect nếu sử dụng cơ sở dữ liệu khác
});

// Định nghĩa một model đơn giản
// const User = sequelize.define('User', {
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// });

// Kiểm tra kết nối và đồng thời định nghĩa một function để chạy sau khi kết nối thành công
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Kết nối đã thiết lập thành công.');

        // // Đồng thời thử tạo bảng trong cơ sở dữ liệu nếu chưa tồn tại
        // await sequelize.sync({ force: true });
        // console.log('Cơ sở dữ liệu đã được đồng bộ hóa.');

        // // Tạo một bản ghi mới
        // const newUser = await User.create({
        //     username: 'john_doe',
        //     email: 'john@example.com',
        //     password: 'password123'
        // });
        // console.log('Người dùng mới đã được tạo:', newUser.toJSON());
    } catch (error) {
        console.error('Không thể kết nối tới cơ sở dữ liệu:', error);
    }
}

// Chạy hàm kiểm tra kết nối
testConnection();
