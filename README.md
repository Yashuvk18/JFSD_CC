# JFSD_CC
public interface StoreOperations {
    void addProduct(Product product);
    void buyProduct(int productID);
    void viewCart();
    void checkout();
}
public abstract class Product {
    protected int productID;
    protected String name;
    protected double price;
    protected int stock;
    public Product(int productID, String name, double price, int stock) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    import java.util.ArrayList;
import java.util.List;

public class OnlineStore implements StoreOperations {
    private List<Product> inventory = new ArrayList<>();
    private List<Product> cart = new ArrayList<>();
    @Override
    public void addProduct(Product product) {
        inventory.add(product);
    }
    @Override
    public void buyProduct(int productID) {
        for (Product product : inventory) {
            if (product.getProductID() == productID && product.getStock() > 0) {
                cart.add(product);
                product.setStock(product.getStock() - 1);
                System.out.println("Added to cart: " + product.getName());
                return;
            }
        }
        System.out.println("Product not available or out of stock.");
    }
    @Override
    public void viewCart() {
        System.out.println("Your cart:");
        for (Product product : cart) {
            System.out.println(product.getName() + " - $" + product.getPrice());
        }
    }
    @Override
    public void checkout() {
        double total = 0;
        for (Product product : cart) {
            total += product.getPrice();
        }
        cart.clear();
        System.out.println("Total amount: $" + total);
        System.out.println("Thank you for your purchase!");
    }
    public static void main(String[] args) {
        OnlineStore store = new OnlineStore();
        Product product1 = new SimpleProduct(1, "Product 1", 10.00, 10);
        Product product2 = new SimpleProduct(2, "Product 2", 15.00, 5);
        store.addProduct(product1);
        store.addProduct(product2);
        store.buyProduct(1);
        store.viewCart();
        store.checkout();
    }
}

class SimpleProduct extends Product {
    public SimpleProduct(int productID, String name, double price, int stock) {
        super(productID, name, price, stock);
    }
}
    public int getProductID() { return productID; }
    public String getName() { return name; }
    public double getPrice() { return price; }
    public int getStock() { return stock; }
    public void setStock(int stock) { this.stock = stock; }
}
